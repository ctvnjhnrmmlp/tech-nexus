import { Button } from '@/components/ui/button';
import PARTNERS from '@/sources/partners';
import SPONSORS from '@/sources/sponsors';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='no-scrollbar'>
			<section className='flex min-h-screen'>
				<div className='flex justify-evenly w-full'>
					<div className='flex flex-col justify-center items-center space-y-6 w-full h-full'>
						<div>
							<Image
								src='/images/tech-nexus.png'
								width={500}
								height={100}
								className='w-[35rem] pointer-events-none'
								alt='Tech Nexus logo'
							/>
						</div>
						<div>
							<p className='text-center font-bold text-neutral-600 text-lg'>
								November 30, 2024 | Saturday
							</p>
							<p className='text-center font-bold text-neutral-600 text-lg'>
								8:00 AM - 5:00 PM
							</p>
							<p className='text-center font-bold text-neutral-600 text-lg'>
								University of Batangas - Lipa
							</p>
						</div>
						<div className='w-48'>
							<Button className='w-full bg-purple-600 uppercase font-bold text-xl py-6'>
								Register
							</Button>
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-full bg-tech-nexus-hero' />
				</div>
			</section>

			<section>
				<div className='flex justify-center py-28'>
					<div className='w-3/12'>
						<p className='text-center font-bold text-neutral-600 text-xl text-balance'>
							A premier tech conference targeted for both students and tech
							professionals in the region of CALABARZON
						</p>
					</div>
				</div>
				<div>
					<div>
						<Image
							src='/images/campus-devcon-cover.png'
							width={500}
							height={100}
							className='w-full pointer-events-none'
							alt='Campus DevCon cover'
							unoptimized
						/>
					</div>
				</div>
			</section>

			<section className='flex bg-tech-nexus-cover-light-large bg-cover bg-center min-h-screen'>
				<div className='flex flex-col justify-center items-center w-full space-y-16'>
					<div className='space-y-8'>
						<div>
							<h2 className='uppercase text-center text-6xl text-neutral-600'>
								Supported By
							</h2>
						</div>
						<div className='flex gap-8'>
							{SPONSORS.map((sponsor, index) => (
								<Image
									key={index}
									src='/images/triangles.png'
									width={500}
									height={100}
									className='w-72 pointer-events-none'
									alt='Sponsor logo'
									unoptimized
								/>
							))}
						</div>
					</div>
					<div className='space-y-8'>
						<div>
							<h2 className='uppercase text-center text-4xl text-neutral-600'>
								In Partnership With
							</h2>
						</div>
						<div className='flex gap-8'>
							{PARTNERS.map((partner, index) => (
								<Image
									key={index}
									src='/images/fabric.png'
									width={500}
									height={100}
									className='w-40 pointer-events-none'
									alt='Partner logo'
									unoptimized
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className='flex bg-tech-nexus-cover-light-medium bg-cover bg-center min-h-screen'>
				<div className='w-full space-y-8 px-24'>
					<div>
						<h2 className='uppercase text-6xl text-neutral-600'>
							Program Flow
						</h2>
					</div>
					<div className='flex space-x-10'>
						<div className='bg-neutral-600 w-1.5 h-[40rem]' />
						<div className='space-y-6'>
							<div className='space-y-2'>
								<h3 className='text-5xl text-neutral-600'>Registration</h3>
								<p className='font-bold text-neutral-600 text-lg'>
									{`<Details>`}
								</p>
								<p className='font-bold text-neutral-600 text-lg'>{`<Time>`}</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-5xl text-neutral-600'>{`<EVENT>`}</h3>
								<p className='font-bold text-neutral-600 text-lg'>
									{`<Details>`}
								</p>
								<p className='font-bold text-neutral-600 text-lg'>{`<Time>`}</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-5xl text-neutral-600'>{`<EVENT>`}</h3>
								<p className='font-bold text-neutral-600 text-lg'>
									{`<Details>`}
								</p>
								<p className='font-bold text-neutral-600 text-lg'>{`<Time>`}</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-5xl text-neutral-600'>{`<EVENT>`}</h3>
								<p className='font-bold text-neutral-600 text-lg'>
									{`<Details>`}
								</p>
								<p className='font-bold text-neutral-600 text-lg'>{`<Time>`}</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/tech-nexus-stack.png'
						width={500}
						height={100}
						className='w-72 pointer-events-none'
						alt='Tech Nexus logo'
						unoptimized
					/>
				</div>
			</section>

			<footer className='flex bg-tech-nexus-footer bg-cover bg-center bg-no-repeat h-96'>
				<div className='flex flex-col justify-center items-center w-full space-y-4'>
					<div>
						<p className='text-center font-bold text-neutral-600 text-xl'>
							Be part of this year's Campus Summit!
						</p>
					</div>
					<div className='w-48'>
						<Button className='w-full bg-purple-600 uppercase font-bold text-xl py-6'>
							Register
						</Button>
					</div>
				</div>
			</footer>
		</main>
	);
}
