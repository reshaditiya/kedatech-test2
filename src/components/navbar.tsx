import { Button } from './button';
import { Receipt, ArrowRight } from '@phosphor-icons/react';

export function Navbar() {
	return (
		<nav className='flex justify-between p-6'>
			<span className='flex items-center gap-2 font-bold font-display text-lg text-slate-800'>
				<Receipt className='w-6 h-6' weight='bold' />
				UpTech
			</span>
			<span className='hidden md:flex md:gap-12 items-center'>
				<span className='hidden lg:flex lg: gap-12 h-full items-center'>
					<a href='#'>
						<Button variant='link'>Tentang</Button>
					</a>
					<a href='#'>
						<Button variant='link'>Harga</Button>
					</a>
					<a href='#'>
						<Button variant='link'>Kontak</Button>
					</a>
				</span>
				<Button icon={<ArrowRight className='w-5 h-5' weight='bold' />}>
					Masuk
				</Button>
			</span>
		</nav>
	);
}
