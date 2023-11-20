import React from "react";

export const useDidUpdate = (cb, deps) => {
  const isMountedRef = React.useRef(false);

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    return cb();
  }, deps);
};
