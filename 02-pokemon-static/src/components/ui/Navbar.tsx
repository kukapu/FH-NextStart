import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {

  const { theme, isDark } = useTheme();
  // console.log(theme)

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray100.value,
    }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
        alt='AppIcon'
        width={70}
        height={70}
      />

      <Link href='/' style={{ display: 'flex'}} >
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okemon</Text>
      </Link>

      <Spacer css={{ flex: 1 }}/>

      <Link href='/favorites'>
        <Text color="white" h3>Favoritos</Text>
      </Link>

    </div>
  )
}


 