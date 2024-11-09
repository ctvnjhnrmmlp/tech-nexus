import localFont from 'next/font/local';

const batangas = localFont({
	src: '../public/fonts/batangas.otf',
	variable: '--font-batangas',
	weight: '100 200 300 400 500 600 700 800 900',
});

const geistSans = localFont({
	src: '../public/fonts/geist-vf.woff',
	variable: '--font-geist-sans',
	weight: '100 200 300 400 500 600 700 800 900',
});

const FONTS = {
	alpha: batangas,
	bravo: geistSans,
};

export default FONTS;
