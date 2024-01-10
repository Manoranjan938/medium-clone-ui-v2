/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useRef, useState } from "react";

interface InPageNavProps {
  routes: string[];
  defaultHidden: string[];
  defaultActiveIndex?: number;
  children: ReactElement;
}

export let activeTabLineRef: any;
export let activeTabRef: any;

const InPageNavigation = ({
  routes,
  defaultHidden = [],
  defaultActiveIndex = 0,
  children,
}: InPageNavProps) => {
  const [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex);
  activeTabLineRef = useRef();
  activeTabRef = useRef();

  const changePageState = (btn: any, i: number) => {
    const { offsetWidth, offsetLeft } = btn;
    activeTabLineRef.current.style.width = offsetWidth + "px";
    activeTabLineRef.current.style.left = offsetLeft + "px";
    setInPageNavIndex(i);
  };

  useEffect(() => {
    changePageState(activeTabRef.current, defaultActiveIndex);
  }, []);

  return (
    <>
      <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {routes.map((route, idx) => {
          return (
            <button
              ref={idx === defaultActiveIndex ? activeTabRef : null}
              key={idx}
              className={
                "p-4 px-5 capitalize " +
                (inPageNavIndex === idx ? "text-black " : "text-dark-grey ") +
                (defaultHidden.includes(route) ? "md:hidden " : " ")
              }
              onClick={(e) => {
                changePageState(e.target, idx);
              }}
            >
              {route}
            </button>
          );
        })}

        <hr ref={activeTabLineRef} className="absolute bottom-0 duration-300" />
      </div>
      {Array.isArray(children) ? children[inPageNavIndex] : children}
    </>
  );
};

export default InPageNavigation;
