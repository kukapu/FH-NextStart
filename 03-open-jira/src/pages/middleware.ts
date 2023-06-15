import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  
  console.log({ req: req.nextUrl.pathname })

  if( req.nextUrl.pathname.startsWith('/api/entries') ) {

    //FORMA CUTRE DE HACERLA CON ESTE CASO EN CONCRETO
    // MEJOR AUTOMATIZAR
    const id = req.nextUrl.pathname.replace('/api/entries/', '')

    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if( !checkMongoIDRegExp.test( id )) {
      const url = req.nextUrl.clone()
      url.pathname = '/api/bad-request'
      url.search = `?message=${id} is not a valid Mongo ID`

      return NextResponse.redirect(url)
      
    }

    // EN NEXT 13 SE PUEDEN DEVOLVER RESPUESTAS NO HACE FALTA HACER LA REZ DE BAD-REQUEST
    // if (!checkMongoIDRegExp.test(id)) {
    //   return new NextResponse(
    //     JSON.stringify({
    //       success: false,
    //       message: `${id} is not a valid MongoID`,
    //     }),
    //     { status: 400, headers: { 'content-type': 'application/json' } }
    //   )
    // }

  }
  
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: [
    // '/api/:path', 
    '/api/entries/:path',
  ]
}