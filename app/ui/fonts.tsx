import { Poppins, Roboto_Slab, Rufina } from 'next/font/google';

export const poppins = Poppins({
  variable: '--poppins',
  weight: ['500', '600'],
  subsets: ['latin'],
});

export const robotoSlab = Roboto_Slab({
  variable: '--roboto-slab',
  weight: ['500', '700'],
  subsets: ['latin'],
});

export const rufina = Rufina({
  variable: '--rufina',
  weight: ['700'],
  subsets: ['latin'],
});
