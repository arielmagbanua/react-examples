import classNames from "classnames";

function Panel({children, className, ...restProps}) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div className={finalClassNames} {...restProps}>
      {children}
    </div>
  )
}

export default Panel;
