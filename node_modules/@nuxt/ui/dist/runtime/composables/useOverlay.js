import { reactive, markRaw, shallowReactive } from "vue";
import { createSharedComposable } from "@vueuse/core";
function _useOverlay() {
  const overlays = shallowReactive([]);
  const create = (component, _options) => {
    const { props, defaultOpen, destroyOnClose } = _options || {};
    const options = reactive({
      id: Symbol(import.meta.dev ? "useOverlay" : ""),
      modelValue: !!defaultOpen,
      component: markRaw(component),
      isMounted: !!defaultOpen,
      destroyOnClose: !!destroyOnClose,
      props: props || {}
    });
    overlays.push(options);
    return {
      open: (props2) => open(options.id, props2),
      close: (value) => close(options.id, value),
      patch: (props2) => patch(options.id, props2)
    };
  };
  const open = (id, props) => {
    const overlay = getOverlay(id);
    if (props) {
      patch(overlay.id, props);
    }
    overlay.modelValue = true;
    overlay.isMounted = true;
    return new Promise((resolve) => {
      overlay.resolvePromise = resolve;
    });
  };
  const close = (id, value) => {
    const overlay = getOverlay(id);
    overlay.modelValue = false;
    if (overlay.resolvePromise) {
      overlay.resolvePromise(value);
      overlay.resolvePromise = void 0;
    }
  };
  const unMount = (id) => {
    const overlay = getOverlay(id);
    overlay.isMounted = false;
    if (overlay.destroyOnClose) {
      const index = overlays.findIndex((overlay2) => overlay2.id === id);
      overlays.splice(index, 1);
    }
  };
  const patch = (id, props) => {
    const overlay = getOverlay(id);
    Object.entries(props).forEach(([key, value]) => {
      overlay.props[key] = value;
    });
  };
  const getOverlay = (id) => {
    const overlay = overlays.find((overlay2) => overlay2.id === id);
    if (!overlay) {
      throw new Error("Overlay not found");
    }
    return overlay;
  };
  return {
    overlays,
    open,
    close,
    create,
    patch,
    unMount
  };
}
export const useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
