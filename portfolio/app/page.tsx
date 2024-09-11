import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen mx-36'>
      <div className='flex items-center justify-center w-full gap-20 '>
        <div className='bg-zinc-100 dark:bg-zinc-900'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          possimus tempore ipsa maxime, reprehenderit hic unde, dolore nesciunt
          vitae sed, dignissimos magnam esse aperiam! Quidem assumenda facilis
          magnam nostrum animi?
        </div>
        <Image
          src='/images/placeholder.png'
          width={750}
          height={750}
          alt='Lode Van Beneden'
        />
      </div>
    </div>
  );
}
