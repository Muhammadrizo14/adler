"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the pathname into segments
  let pathSegments = pathname.split('/').filter(segment => segment !== '');

  // Create a mapping of path segments to breadcrumb names
  const pathNames = {
    '': 'Главная',
    'kursy-kosmetologa': 'Курсы косметолога',
    'kursy-massage': 'Курсы массажа'
  };

  // Generate breadcrumb items
  const breadcrumbs = [];
  let accumulatedPath = '';

  pathSegments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    breadcrumbs.push({
      href: accumulatedPath,
      title: pathNames[segment] || segment,
      isLast: isLast
    });
  });

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  return (
    <div className="breadcrumbs">
      <ul className="flex text-sm text-gray-600 space-x-2">
        <li className="hover:text-gray-900">
          <Link href="/">Главная</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {crumb.isLast ? (
              <span className="text-gray-400">{crumb.title}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-gray-900">
                {crumb.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;