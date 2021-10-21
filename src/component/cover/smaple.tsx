import { Mesh }  from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// import p_test_frag from './particle_test/glsl/p_test.frag'
// import p_test_vert from './particle_test/glsl/p_test.vert'


const Particle_test = () => {

    const ref = useRef({} as Mesh)

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        ref!.current!.material['uniforms'].time.value = time*0.2;
      })

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[2, 2, 1]} />
            <shaderMaterial
                attach="material"
                wireframe={false}
                args={[PurpleShader]}
            />
        </mesh>
    )

}

export default Particle_test

const PurpleShader = {
    uniforms: {
      time: { type: "f", value: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4( position, 1.0 );
      }
    `,
    fragmentShader: `
    varying vec2 vUv;
    uniform float time;
    void main() {
      vec2 p = - 1.0 + 2.0 * vUv;
      float a = time * 40.0;
      float d, e, f, g = 1.0 / 40.0 ,h ,i ,r ,q;

      e = 400.0 * ( p.x * 0.5 + 0.5 );
      f = 400.0 * ( p.y * 0.5 + 0.5 );
      i = 200.0 + sin( e * g + a / 150.0 ) * 20.0;
      d = 200.0 + cos( f * g / 2.0 ) * 18.0 + cos( e * g ) * 7.0;
      r = sqrt( pow( abs( i - e ), 2.0 ) + pow( abs( d - f ), 2.0 ) );
      q = f / r;
      e = ( r * cos( q ) ) - a / 2.0;
      f = ( r * sin( q ) ) - a / 2.0;
      d = sin( e * g ) * 176.0 + sin( e * g ) * 164.0 + r;
      h = ( ( f + d ) + a / 2.0 ) * g;
      i = cos( h + r * p.x / 1.3 ) * ( e + e + a ) + cos( q * g * 6.0 ) * ( r + h / 3.0 );
      h = sin( f * g ) * 144.0 - sin( e * g ) * 212.0 * p.x;
      h = ( h + ( f - e ) * q + sin( r - ( a + h ) / 7.0 ) * 10.0 + i / 4.0 ) * g;
      i += cos( h * 2.3 * sin( a / 350.0 - q ) ) * 184.0 * sin( q - ( r * 4.3 + a / 12.0 ) * g ) + tan( r * g + h ) * 184.0 * cos( r * g + h );
      i = mod( i / 5.6, 256.0 ) / 64.0;
      if ( i < 0.0 ) i += 4.0;
      if ( i >= 2.0 ) i = 4.0 - i;
      d = r / 350.0;
      d += sin( d * d * 8.0 ) * 0.52;
      f = ( sin( a * g ) + 1.0 ) / 2.0;
      gl_FragColor = vec4( vec3( f * i / 1.6, i / 2.0 + d / 13.0, i ) * d * p.x + vec3( i / 1.3 + d / 8.0, i / 2.0 + d / 18.0, i ) * d * ( 1.0 - p.x ), 1.0 );
    }
  `
  }
  
  export { PurpleShader }

  const LuminosityShader = {

	uniforms: {

		'tDiffuse': { value: null }

	},

	vertexShader: /* glsl */`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: /* glsl */`
		#include <common>
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			float l = linearToRelativeLuminance( texel.rgb );
			gl_FragColor = vec4( l, l, l, texel.w );
		}`

};

export { LuminosityShader };