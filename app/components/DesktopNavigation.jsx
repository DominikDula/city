const DesktopNavigation = ({ navigation }) => {
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className="hidden sm:ml-6 md:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'font-bold text-t-main-hover dark:text-t-main-hover-dark' : 'text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
