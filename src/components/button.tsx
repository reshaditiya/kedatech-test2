import { twMerge } from 'tailwind-merge';

export function Button({
	icon,
	variant = 'primary',
	children,
	className,
	...props
}: {
	icon?: React.ReactElement;
	variant?: 'primary' | 'link' | 'outline' | 'secondary';
	children: string;
	className?: string;
	props?: React.ReactPropTypes;
}) {
	const classVariant = {
		primary:
			'flex gap-2 items-center py-4 px-12 bg-red-900 text-white rounded-2xl font-display font-semibold hover:bg-red-950 active:bg-red-950 cursor-pointer transition',
		link: 'font-display font-semibold text-red-900 hover:border-b-2 hover:border-red-900 transition',
		outline: '',
		secondary: '',
	};

	return (
		<button className={twMerge(classVariant[variant], className)} {...props}>
			{children}
			{icon}
		</button>
	);
}
