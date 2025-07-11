// types/three-fiber.d.ts
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: any;
            meshLineMaterial: any;
        }
    }
}

declare module '@react-three/fiber' {
    interface ThreeElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
    }
}
