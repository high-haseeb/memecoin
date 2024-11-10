import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { DogModel } from "./components/Dog.tsx";
import { CoinModel } from "../components/Coin.tsx";
import { Environment, Loader } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from 'three';

function App() {
    return (
        <main className="w-screen h-screen flex items-center justify-center bg-[#181818] text-white">
            <Experience />
        </main>
    )
}
const Experience = () => {
    const speed = 1;
    const count = 40;
    const depth = 10;
    const easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
    return (
        <>
            <Loader />
            <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} className="h-full w-full bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]" >
                <Environment preset="warehouse" />
                <ambientLight />
                <directionalLight position={[0, 3, 0]} />
                {
                    Array.from({ length: count }, (_, i) => {
                        const z = Math.round(easing(i / count) * depth);
                        const props = { key: i, index: i, z, speed };
                        return <Coin {...props} />
                    })
                }
                <CoinRotationModel />
            </Canvas>
        </>
    )
}
function Coin({ index, z, speed }: { index: number, z: number; speed: number }) {
    const ref = useRef<THREE.Group>(null);
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });

    useFrame((state, dt) => {
        if (ref.current == null) return;
        if (dt < 0.1)
            ref.current.position.set(
                index === 0 ? 0 : data.x * width,
                (data.y += dt * speed),
                -z,
            );
        ref.current.rotation.set(
            (data.rX += dt / data.spin),
            Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
            (data.rZ += dt / data.spin),
        );
        if (data.y > height * (index === 0 ? 4 : 1))
            data.y = -(height * (index === 0 ? 4 : 1));
    });
    return (
        <CoinModel ref={ref} scale={5.0} rotation={[0, -Math.PI, 0]} />
    );
}

const CoinRotationModel = () => {
    const ref = useRef<THREE.Group>(null);
    const [pointerOver, setPointerOver] = useState(false);
    useFrame(({ pointer, camera }, _delta) => {
        if (ref.current == null) return;

        // always face the pointer
        const pointerVector = new THREE.Vector3(pointer.x, pointer.y, 0.6).unproject(camera);
        const direction = new THREE.Vector3().subVectors(pointerVector, ref.current.position).normalize();
        ref.current.quaternion.slerp(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 2), direction), 0.1);

        pointerOver ?
            ref.current.scale.lerp({ x: 5, y: 5, z: 5 }, 0.1) :
            ref.current.scale.lerp({ x: 4, y: 4, z: 4 }, 0.1);
    })

    return (
        <CoinModel ref={ref} onPointerOver={() => setPointerOver(true)} onPointerLeave={() => setPointerOver(false)} rotation={[0, -Math.PI, 0]} position={[0, 0, 2]} />
    )
}

export default App
