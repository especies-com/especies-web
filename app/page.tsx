import Zookeeper from '@/public/images/zookeeper.png'
import ScreenModel from '@/public/images/screen_model.png'
import Image from 'next/image';
import Logo from '@/public/images/full_logo.svg'
import Apple from '@/public/images/apple.svg'
import GooglePlay from '@/public/images/google_play.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <img src="/images/background.svg" className='h-screen w-screen object-cover' />

      <div className='absolute top-0 h-screen w-screen'>
        <div className='w-[75%] mx-auto flex-col h-[92%]'>
          <div className='flex flex-row justify-between items-center my-[30px] text-lg'>
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

          <div className='w-[40%] mt-[10%] gap-8 flex flex-col'>
            <div className='font-sarabun font-semibold gap-6 flex flex-col'>
              <p className='text-lg text-[#0F766E] rounded-lg px-[18.5] py-[16px] w-fit shadow-[0_1px_2px_0_rgb(0_180_169_/_0.06),0_1px_3px_0_rgb(0_180_169_/_0.10)] bg-[#FFFFFF]'>Inscreva-se para testar</p>

              <p className='text-4xl font-semibold text-[#323B4B] leading-none text-[#323B4B]'>Plataforma inteligente para manejo de animais</p>

              <p className='text-justify text-lg leading-none text-[#323B4B]'>Centralize as informações da sua equipe, registre todas as atividades de manejo e tenha acesso às informações dos animais onde estiver. </p>
            </div>

            <div className='font-circular font-semibold flex flex-row gap-4 text-lg'>
              <div className='py-2 px-4 bg-black w-fit justify-center flex gap-4 rounded-lg shadow-md'>
                <Image src={Apple} alt='Logotipo da Apple Store' />
                <a href="" className='text-white rounded-lg'>Apple Store</a>
              </div>

              <div className='py-2 px-4 bg-white w-fit justify-center flex gap-4 rounded-lg shadow-md'>
                <Image src={GooglePlay} alt='Logotipo do Google Play' />
                <a href="" className='text-gray-600 rounded-lg'>Google Play</a>
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
