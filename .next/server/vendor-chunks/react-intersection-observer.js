"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-intersection-observer";
exports.ids = ["vendor-chunks/react-intersection-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-intersection-observer/dist/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-intersection-observer/dist/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InView: () => (/* binding */ InView),\n/* harmony export */   defaultFallbackInView: () => (/* binding */ defaultFallbackInView),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ InView,defaultFallbackInView,observe,useInView auto */ var __defProp = Object.defineProperty;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n// src/InView.tsx\n\n// src/observe.ts\nvar observerMap = /* @__PURE__ */ new Map();\nvar RootIds = /* @__PURE__ */ new WeakMap();\nvar rootId = 0;\nvar unsupportedValue = void 0;\nfunction defaultFallbackInView(inView) {\n    unsupportedValue = inView;\n}\nfunction getRootId(root) {\n    if (!root) return \"0\";\n    if (RootIds.has(root)) return RootIds.get(root);\n    rootId += 1;\n    RootIds.set(root, rootId.toString());\n    return RootIds.get(root);\n}\nfunction optionsToId(options) {\n    return Object.keys(options).sort().filter((key)=>options[key] !== void 0).map((key)=>{\n        return `${key}_${key === \"root\" ? getRootId(options.root) : options[key]}`;\n    }).toString();\n}\nfunction createObserver(options) {\n    const id = optionsToId(options);\n    let instance = observerMap.get(id);\n    if (!instance) {\n        const elements = /* @__PURE__ */ new Map();\n        let thresholds;\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                var _a;\n                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);\n                if (options.trackVisibility && typeof entry.isVisible === \"undefined\") {\n                    entry.isVisible = inView;\n                }\n                (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback)=>{\n                    callback(inView, entry);\n                });\n            });\n        }, options);\n        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [\n            options.threshold || 0\n        ]);\n        instance = {\n            id,\n            observer,\n            elements\n        };\n        observerMap.set(id, instance);\n    }\n    return instance;\n}\nfunction observe(element, callback, options = {}, fallbackInView = unsupportedValue) {\n    if (typeof window.IntersectionObserver === \"undefined\" && fallbackInView !== void 0) {\n        const bounds = element.getBoundingClientRect();\n        callback(fallbackInView, {\n            isIntersecting: fallbackInView,\n            target: element,\n            intersectionRatio: typeof options.threshold === \"number\" ? options.threshold : 0,\n            time: 0,\n            boundingClientRect: bounds,\n            intersectionRect: bounds,\n            rootBounds: bounds\n        });\n        return ()=>{};\n    }\n    const { id, observer, elements } = createObserver(options);\n    const callbacks = elements.get(element) || [];\n    if (!elements.has(element)) {\n        elements.set(element, callbacks);\n    }\n    callbacks.push(callback);\n    observer.observe(element);\n    return function unobserve() {\n        callbacks.splice(callbacks.indexOf(callback), 1);\n        if (callbacks.length === 0) {\n            elements.delete(element);\n            observer.unobserve(element);\n        }\n        if (elements.size === 0) {\n            observer.disconnect();\n            observerMap.delete(id);\n        }\n    };\n}\n// src/InView.tsx\nfunction isPlainChildren(props) {\n    return typeof props.children !== \"function\";\n}\nvar InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props){\n        super(props);\n        __publicField(this, \"node\", null);\n        __publicField(this, \"_unobserveCb\", null);\n        __publicField(this, \"handleNode\", (node)=>{\n            if (this.node) {\n                this.unobserve();\n                if (!node && !this.props.triggerOnce && !this.props.skip) {\n                    this.setState({\n                        inView: !!this.props.initialInView,\n                        entry: void 0\n                    });\n                }\n            }\n            this.node = node ? node : null;\n            this.observeNode();\n        });\n        __publicField(this, \"handleChange\", (inView, entry)=>{\n            if (inView && this.props.triggerOnce) {\n                this.unobserve();\n            }\n            if (!isPlainChildren(this.props)) {\n                this.setState({\n                    inView,\n                    entry\n                });\n            }\n            if (this.props.onChange) {\n                this.props.onChange(inView, entry);\n            }\n        });\n        this.state = {\n            inView: !!props.initialInView,\n            entry: void 0\n        };\n    }\n    componentDidMount() {\n        this.unobserve();\n        this.observeNode();\n    }\n    componentDidUpdate(prevProps) {\n        if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {\n            this.unobserve();\n            this.observeNode();\n        }\n    }\n    componentWillUnmount() {\n        this.unobserve();\n    }\n    observeNode() {\n        if (!this.node || this.props.skip) return;\n        const { threshold, root, rootMargin, trackVisibility, delay, fallbackInView } = this.props;\n        this._unobserveCb = observe(this.node, this.handleChange, {\n            threshold,\n            root,\n            rootMargin,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n    }\n    unobserve() {\n        if (this._unobserveCb) {\n            this._unobserveCb();\n            this._unobserveCb = null;\n        }\n    }\n    render() {\n        const { children } = this.props;\n        if (typeof children === \"function\") {\n            const { inView, entry } = this.state;\n            return children({\n                inView,\n                entry,\n                ref: this.handleNode\n            });\n        }\n        const { as, triggerOnce, threshold, root, rootMargin, onChange, skip, trackVisibility, delay, initialInView, fallbackInView, ...props } = this.props;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(as || \"div\", {\n            ref: this.handleNode,\n            ...props\n        }, children);\n    }\n};\n// src/useInView.tsx\n\nfunction useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {\n    var _a;\n    const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n        inView: !!initialInView,\n        entry: void 0\n    });\n    callback.current = onChange;\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        if (skip || !ref) return;\n        let unobserve;\n        unobserve = observe(ref, (inView, entry)=>{\n            setState({\n                inView,\n                entry\n            });\n            if (callback.current) callback.current(inView, entry);\n            if (entry.isIntersecting && triggerOnce && unobserve) {\n                unobserve();\n                unobserve = void 0;\n            }\n        }, {\n            root,\n            rootMargin,\n            threshold,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n        return ()=>{\n            if (unobserve) {\n                unobserve();\n            }\n        };\n    }, // We break the rule here, because we aren't including the actual `threshold` variable\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        // If the threshold is an array, convert it to a string, so it won't change between renders.\n        Array.isArray(threshold) ? threshold.toString() : threshold,\n        ref,\n        root,\n        rootMargin,\n        triggerOnce,\n        skip,\n        trackVisibility,\n        fallbackInView,\n        delay\n    ]);\n    const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;\n    const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {\n        previousEntryTarget.current = entryTarget;\n        setState({\n            inView: !!initialInView,\n            entry: void 0\n        });\n    }\n    const result = [\n        setRef,\n        state.inView,\n        state.entry\n    ];\n    result.ref = result[0];\n    result.inView = result[1];\n    result.entry = result[2];\n    return result;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O29HQUNBLElBQUlBLFlBQVlDLE9BQU9DLGNBQWM7QUFDckMsSUFBSUMsa0JBQWtCLENBQUNDLEtBQUtDLEtBQUtDLFFBQVVELE9BQU9ELE1BQU1KLFVBQVVJLEtBQUtDLEtBQUs7UUFBRUUsWUFBWTtRQUFNQyxjQUFjO1FBQU1DLFVBQVU7UUFBTUg7SUFBTSxLQUFLRixHQUFHLENBQUNDLElBQUksR0FBR0M7QUFDMUosSUFBSUksZ0JBQWdCLENBQUNOLEtBQUtDLEtBQUtDLFFBQVVILGdCQUFnQkMsS0FBSyxPQUFPQyxRQUFRLFdBQVdBLE1BQU0sS0FBS0EsS0FBS0M7QUFFeEcsaUJBQWlCO0FBQ2M7QUFFL0IsaUJBQWlCO0FBQ2pCLElBQUlNLGNBQWMsYUFBYSxHQUFHLElBQUlDO0FBQ3RDLElBQUlDLFVBQVUsYUFBYSxHQUFHLElBQUlDO0FBQ2xDLElBQUlDLFNBQVM7QUFDYixJQUFJQyxtQkFBbUIsS0FBSztBQUM1QixTQUFTQyxzQkFBc0JDLE1BQU07SUFDbkNGLG1CQUFtQkU7QUFDckI7QUFDQSxTQUFTQyxVQUFVQyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0EsTUFBTSxPQUFPO0lBQ2xCLElBQUlQLFFBQVFRLEdBQUcsQ0FBQ0QsT0FBTyxPQUFPUCxRQUFRUyxHQUFHLENBQUNGO0lBQzFDTCxVQUFVO0lBQ1ZGLFFBQVFVLEdBQUcsQ0FBQ0gsTUFBTUwsT0FBT1MsUUFBUTtJQUNqQyxPQUFPWCxRQUFRUyxHQUFHLENBQUNGO0FBQ3JCO0FBQ0EsU0FBU0ssWUFBWUMsT0FBTztJQUMxQixPQUFPMUIsT0FBTzJCLElBQUksQ0FBQ0QsU0FBU0UsSUFBSSxHQUFHQyxNQUFNLENBQ3ZDLENBQUN6QixNQUFRc0IsT0FBTyxDQUFDdEIsSUFBSSxLQUFLLEtBQUssR0FDL0IwQixHQUFHLENBQUMsQ0FBQzFCO1FBQ0wsT0FB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R0FBR2EsTUFBTSxDQUFDLEVBQUU7SUFDdEJBLE9BQU96RixNQUFNLEdBQUd5RixNQUFNLENBQUMsRUFBRTtJQUN6QkEsT0FBT25FLEtBQUssR0FBR21FLE1BQU0sQ0FBQyxFQUFFO0lBQ3hCLE9BQU9BO0FBQ1Q7QUFNRSxDQUNGLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvdG9yLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci9kaXN0L2luZGV4Lm1qcz8yMDJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4gX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcblxuLy8gc3JjL0luVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBzcmMvb2JzZXJ2ZS50c1xudmFyIG9ic2VydmVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBSb290SWRzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcm9vdElkID0gMDtcbnZhciB1bnN1cHBvcnRlZFZhbHVlID0gdm9pZCAwO1xuZnVuY3Rpb24gZGVmYXVsdEZhbGxiYWNrSW5WaWV3KGluVmlldykge1xuICB1bnN1cHBvcnRlZFZhbHVlID0gaW5WaWV3O1xufVxuZnVuY3Rpb24gZ2V0Um9vdElkKHJvb3QpIHtcbiAgaWYgKCFyb290KSByZXR1cm4gXCIwXCI7XG4gIGlmIChSb290SWRzLmhhcyhyb290KSkgcmV0dXJuIFJvb3RJZHMuZ2V0KHJvb3QpO1xuICByb290SWQgKz0gMTtcbiAgUm9vdElkcy5zZXQocm9vdCwgcm9vdElkLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gUm9vdElkcy5nZXQocm9vdCk7XG59XG5mdW5jdGlvbiBvcHRpb25zVG9JZChvcHRpb25zKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5zb3J0KCkuZmlsdGVyKFxuICAgIChrZXkpID0+IG9wdGlvbnNba2V5XSAhPT0gdm9pZCAwXG4gICkubWFwKChrZXkpID0+IHtcbiAgICByZXR1cm4gYCR7a2V5fV8ke2tleSA9PT0gXCJyb290XCIgPyBnZXRSb290SWQob3B0aW9ucy5yb290KSA6IG9wdGlvbnNba2V5XX1gO1xuICB9KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICBjb25zdCBpZCA9IG9wdGlvbnNUb0lkKG9wdGlvbnMpO1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlck1hcC5nZXQoaWQpO1xuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGxldCB0aHJlc2hvbGRzO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaW5WaWV3ID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgdGhyZXNob2xkcy5zb21lKCh0aHJlc2hvbGQpID0+IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IHRocmVzaG9sZCk7XG4gICAgICAgIGlmIChvcHRpb25zLnRyYWNrVmlzaWJpbGl0eSAmJiB0eXBlb2YgZW50cnkuaXNWaXNpYmxlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZW50cnkuaXNWaXNpYmxlID0gaW5WaWV3O1xuICAgICAgICB9XG4gICAgICAgIChfYSA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayhpblZpZXcsIGVudHJ5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICB0aHJlc2hvbGRzID0gb2JzZXJ2ZXIudGhyZXNob2xkcyB8fCAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRocmVzaG9sZCkgPyBvcHRpb25zLnRocmVzaG9sZCA6IFtvcHRpb25zLnRocmVzaG9sZCB8fCAwXSk7XG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHNcbiAgICB9O1xuICAgIG9ic2VydmVyTWFwLnNldChpZCwgaW5zdGFuY2UpO1xuICB9XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSwgZmFsbGJhY2tJblZpZXcgPSB1bnN1cHBvcnRlZFZhbHVlKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiICYmIGZhbGxiYWNrSW5WaWV3ICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNhbGxiYWNrKGZhbGxiYWNrSW5WaWV3LCB7XG4gICAgICBpc0ludGVyc2VjdGluZzogZmFsbGJhY2tJblZpZXcsXG4gICAgICB0YXJnZXQ6IGVsZW1lbnQsXG4gICAgICBpbnRlcnNlY3Rpb25SYXRpbzogdHlwZW9mIG9wdGlvbnMudGhyZXNob2xkID09PSBcIm51bWJlclwiID8gb3B0aW9ucy50aHJlc2hvbGQgOiAwLFxuICAgICAgdGltZTogMCxcbiAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogYm91bmRzLFxuICAgICAgaW50ZXJzZWN0aW9uUmVjdDogYm91bmRzLFxuICAgICAgcm9vdEJvdW5kczogYm91bmRzXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gIGNvbnN0IGNhbGxiYWNrcyA9IGVsZW1lbnRzLmdldChlbGVtZW50KSB8fCBbXTtcbiAgaWYgKCFlbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcbiAgfVxuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgY2FsbGJhY2tzLnNwbGljZShjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayksIDEpO1xuICAgIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBvYnNlcnZlck1hcC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gc3JjL0luVmlldy50c3hcbmZ1bmN0aW9uIGlzUGxhaW5DaGlsZHJlbihwcm9wcykge1xuICByZXR1cm4gdHlwZW9mIHByb3BzLmNoaWxkcmVuICE9PSBcImZ1bmN0aW9uXCI7XG59XG52YXIgSW5WaWV3ID0gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibm9kZVwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiX3Vub2JzZXJ2ZUNiXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVOb2RlXCIsIChub2RlKSA9PiB7XG4gICAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICAgIGlmICghbm9kZSAmJiAhdGhpcy5wcm9wcy50cmlnZ2VyT25jZSAmJiAhdGhpcy5wcm9wcy5za2lwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluVmlldzogISF0aGlzLnByb3BzLmluaXRpYWxJblZpZXcsIGVudHJ5OiB2b2lkIDAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZSA9IG5vZGUgPyBub2RlIDogbnVsbDtcbiAgICAgIHRoaXMub2JzZXJ2ZU5vZGUoKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlQ2hhbmdlXCIsIChpblZpZXcsIGVudHJ5KSA9PiB7XG4gICAgICBpZiAoaW5WaWV3ICYmIHRoaXMucHJvcHMudHJpZ2dlck9uY2UpIHtcbiAgICAgICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNQbGFpbkNoaWxkcmVuKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpblZpZXcsIGVudHJ5IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpblZpZXcsIGVudHJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5WaWV3OiAhIXByb3BzLmluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdm9pZCAwXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgIHRoaXMub2JzZXJ2ZU5vZGUoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5yb290TWFyZ2luICE9PSB0aGlzLnByb3BzLnJvb3RNYXJnaW4gfHwgcHJldlByb3BzLnJvb3QgIT09IHRoaXMucHJvcHMucm9vdCB8fCBwcmV2UHJvcHMudGhyZXNob2xkICE9PSB0aGlzLnByb3BzLnRocmVzaG9sZCB8fCBwcmV2UHJvcHMuc2tpcCAhPT0gdGhpcy5wcm9wcy5za2lwIHx8IHByZXZQcm9wcy50cmFja1Zpc2liaWxpdHkgIT09IHRoaXMucHJvcHMudHJhY2tWaXNpYmlsaXR5IHx8IHByZXZQcm9wcy5kZWxheSAhPT0gdGhpcy5wcm9wcy5kZWxheSkge1xuICAgICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZU5vZGUoKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm9ic2VydmUoKTtcbiAgfVxuICBvYnNlcnZlTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMubm9kZSB8fCB0aGlzLnByb3BzLnNraXApIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGRlbGF5LFxuICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl91bm9ic2VydmVDYiA9IG9ic2VydmUoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICByb290LFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxheVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3XG4gICAgKTtcbiAgfVxuICB1bm9ic2VydmUoKSB7XG4gICAgaWYgKHRoaXMuX3Vub2JzZXJ2ZUNiKSB7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYigpO1xuICAgICAgdGhpcy5fdW5vYnNlcnZlQ2IgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IHsgaW5WaWV3LCBlbnRyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGluVmlldywgZW50cnksIHJlZjogdGhpcy5oYW5kbGVOb2RlIH0pO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBhcyxcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNraXAsXG4gICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICBkZWxheSxcbiAgICAgIGluaXRpYWxJblZpZXcsXG4gICAgICBmYWxsYmFja0luVmlldyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBhcyB8fCBcImRpdlwiLFxuICAgICAgeyByZWY6IHRoaXMuaGFuZGxlTm9kZSwgLi4ucHJvcHMgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufTtcblxuLy8gc3JjL3VzZUluVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUluVmlldyh7XG4gIHRocmVzaG9sZCxcbiAgZGVsYXksXG4gIHRyYWNrVmlzaWJpbGl0eSxcbiAgcm9vdE1hcmdpbixcbiAgcm9vdCxcbiAgdHJpZ2dlck9uY2UsXG4gIHNraXAsXG4gIGluaXRpYWxJblZpZXcsXG4gIGZhbGxiYWNrSW5WaWV3LFxuICBvbkNoYW5nZVxufSA9IHt9KSB7XG4gIHZhciBfYTtcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IFJlYWN0Mi51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QyLnVzZVN0YXRlKHtcbiAgICBpblZpZXc6ICEhaW5pdGlhbEluVmlldyxcbiAgICBlbnRyeTogdm9pZCAwXG4gIH0pO1xuICBjYWxsYmFjay5jdXJyZW50ID0gb25DaGFuZ2U7XG4gIFJlYWN0Mi51c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHNraXAgfHwgIXJlZikgcmV0dXJuO1xuICAgICAgbGV0IHVub2JzZXJ2ZTtcbiAgICAgIHVub2JzZXJ2ZSA9IG9ic2VydmUoXG4gICAgICAgIHJlZixcbiAgICAgICAgKGluVmlldywgZW50cnkpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBpblZpZXcsXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChjYWxsYmFjay5jdXJyZW50KSBjYWxsYmFjay5jdXJyZW50KGluVmlldywgZW50cnkpO1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0cmlnZ2VyT25jZSAmJiB1bm9ic2VydmUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZSgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgZGVsYXlcbiAgICAgICAgfSxcbiAgICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAodW5vYnNlcnZlKSB7XG4gICAgICAgICAgdW5vYnNlcnZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBXZSBicmVhayB0aGUgcnVsZSBoZXJlLCBiZWNhdXNlIHdlIGFyZW4ndCBpbmNsdWRpbmcgdGhlIGFjdHVhbCBgdGhyZXNob2xkYCB2YXJpYWJsZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXG4gICAgICAvLyBJZiB0aGUgdGhyZXNob2xkIGlzIGFuIGFycmF5LCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLCBzbyBpdCB3b24ndCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLlxuICAgICAgQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpID8gdGhyZXNob2xkLnRvU3RyaW5nKCkgOiB0aHJlc2hvbGQsXG4gICAgICByZWYsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgc2tpcCxcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3LFxuICAgICAgZGVsYXlcbiAgICBdXG4gICk7XG4gIGNvbnN0IGVudHJ5VGFyZ2V0ID0gKF9hID0gc3RhdGUuZW50cnkpID09IG51bGwgPyB2b2lkIDAgOiBfYS50YXJnZXQ7XG4gIGNvbnN0IHByZXZpb3VzRW50cnlUYXJnZXQgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGlmICghcmVmICYmIGVudHJ5VGFyZ2V0ICYmICF0cmlnZ2VyT25jZSAmJiAhc2tpcCAmJiBwcmV2aW91c0VudHJ5VGFyZ2V0LmN1cnJlbnQgIT09IGVudHJ5VGFyZ2V0KSB7XG4gICAgcHJldmlvdXNFbnRyeVRhcmdldC5jdXJyZW50ID0gZW50cnlUYXJnZXQ7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaW5WaWV3OiAhIWluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdm9pZCAwXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gW3NldFJlZiwgc3RhdGUuaW5WaWV3LCBzdGF0ZS5lbnRyeV07XG4gIHJlc3VsdC5yZWYgPSByZXN1bHRbMF07XG4gIHJlc3VsdC5pblZpZXcgPSByZXN1bHRbMV07XG4gIHJlc3VsdC5lbnRyeSA9IHJlc3VsdFsyXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCB7XG4gIEluVmlldyxcbiAgZGVmYXVsdEZhbGxiYWNrSW5WaWV3LFxuICBvYnNlcnZlLFxuICB1c2VJblZpZXdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbIl9fZGVmUHJvcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX19kZWZOb3JtYWxQcm9wIiwib2JqIiwia2V5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX3B1YmxpY0ZpZWxkIiwiUmVhY3QiLCJvYnNlcnZlck1hcCIsIk1hcCIsIlJvb3RJZHMiLCJXZWFrTWFwIiwicm9vdElkIiwidW5zdXBwb3J0ZWRWYWx1ZSIsImRlZmF1bHRGYWxsYmFja0luVmlldyIsImluVmlldyIsImdldFJvb3RJZCIsInJvb3QiLCJoYXMiLCJnZXQiLCJzZXQiLCJ0b1N0cmluZyIsIm9wdGlvbnNUb0lkIiwib3B0aW9ucyIsImtleXMiLCJzb3J0IiwiZmlsdGVyIiwibWFwIiwiY3JlYXRlT2JzZXJ2ZXIiLCJpZCIsImluc3RhbmNlIiwiZWxlbWVudHMiLCJ0aHJlc2hvbGRzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJfYSIsImlzSW50ZXJzZWN0aW5nIiwic29tZSIsInRocmVzaG9sZCIsImludGVyc2VjdGlvblJhdGlvIiwidHJhY2tWaXNpYmlsaXR5IiwiaXNWaXNpYmxlIiwidGFyZ2V0IiwiY2FsbGJhY2siLCJBcnJheSIsImlzQXJyYXkiLCJvYnNlcnZlIiwiZWxlbWVudCIsImZhbGxiYWNrSW5WaWV3Iiwid2luZG93IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImludGVyc2VjdGlvblJlY3QiLCJyb290Qm91bmRzIiwiY2FsbGJhY2tzIiwicHVzaCIsInVub2JzZXJ2ZSIsInNwbGljZSIsImluZGV4T2YiLCJsZW5ndGgiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsImlzUGxhaW5DaGlsZHJlbiIsInByb3BzIiwiY2hpbGRyZW4iLCJJblZpZXciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm5vZGUiLCJ0cmlnZ2VyT25jZSIsInNraXAiLCJzZXRTdGF0ZSIsImluaXRpYWxJblZpZXciLCJvYnNlcnZlTm9kZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInJvb3RNYXJnaW4iLCJkZWxheSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX3Vub2JzZXJ2ZUNiIiwiaGFuZGxlQ2hhbmdlIiwicmVuZGVyIiwicmVmIiwiaGFuZGxlTm9kZSIsImFzIiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0MiIsInVzZUluVmlldyIsInNldFJlZiIsInVzZVN0YXRlIiwidXNlUmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImVudHJ5VGFyZ2V0IiwicHJldmlvdXNFbnRyeVRhcmdldCIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-intersection-observer/dist/index.mjs\n");

/***/ })

};
;