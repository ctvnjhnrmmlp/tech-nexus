import FONTS from '@/configurations/fonts';
import METADATA from '@/configurations/metadata';
import type { Metadata } from 'next';
import Containers from './containers';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className='no-scrollbar select-none'
		>
			<body className={`${FONTS.bravo.className} antialiased`}>
				<Providers>
					<Containers>{children}</Containers>
				</Providers>
			</body>
		</html>
	);
}
