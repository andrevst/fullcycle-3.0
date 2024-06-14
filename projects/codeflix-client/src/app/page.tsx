import Image from 'next/image';
import Header from './components/Header';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

type Props = {

  sectionTitle: string;

};

type MovieCardProps = {

  index: number;

};

const MovieCard = ({ index }: MovieCardProps) => (

  <div className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110'>

    <Image

      src={`/item_${index}.png`}

      fill={true}

      alt='MAID'

      className='rounded'

    />

  </div>

);




export const MovieRow = ({ sectionTitle }: Props) => (

  <div className='flex-col space-y-4 pl-2'>

    <div className='flex'>

      <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>

        {sectionTitle}

      </h2>

    </div>




    <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>

      {[1, 2, 3, 4, 5, 6, 2].map((index) => (

        <MovieCard key={index} index={index} />

      ))}

    </div>

  </div>

);

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative h-screen mb-48 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner5.jpeg'
              alt='The Witcher'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>

          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
           <PlayIcon className='h-6 w-6' />
           Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className='h-6 w-6' />
            More Info
          </button>
        </div>
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}