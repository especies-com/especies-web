import Zookeeper from '@/public/images/zookeeper.png'
import ScreenModel from '@/public/images/screen_model.png'
import Image from 'next/image';
import Logo from '@/public/images/full_logo.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <img src="/images/background.svg" className='h-screen w-screen object-cover' />

      <div className='absolute top-0 h-screen w-screen'>
        <div className='flex-col'>
          <div className='w-[75%] mx-auto'>
            <div className='flex flex-row justify-between items-center my-[30px]'>
              <Image src={Logo} alt='Logotipo' />

              <div className='font-sarabun font-semibold text-[#0F766E] gap-8 flex text-[18px]'>
                <a href="">Sobre</a>
                <a href="">Preço</a>
              </div>

              <div className='font-sarabun gap-8 flex font-semibold text-[18px] items-center'>
                <Link href={"/signup"} className='text-white'>Entrar</Link>
                <Link href={"/login"} className='text-[#323B4B] py-[12px] px-[33px] bg-[#FFCD52] rounded-xs'>Inscreva-se</Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Image alt='Tratadora de Animais' src={Zookeeper} className='absolute bottom-0 right-[20%] h-[80%] w-auto' />
      <Image alt='Exemplo de Tela do Aplicativo' src={ScreenModel} className='absolute bottom-[23%] right-[2.5%] scale-75' />
    </>
  );
}
