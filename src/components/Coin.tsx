
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { forwardRef } from 'react'

type GLTFResult = GLTF & {
    nodes: {
        Coin_Baked: THREE.Mesh
    }
    materials: {
        Coin_Baked: THREE.MeshStandardMaterial
    }
}

export const CoinModel = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
    const { nodes, materials } = useGLTF('/models/coin/Coin.gltf') as GLTFResult
    return (
        <group {...props} ref={ref} dispose={null}>
            <mesh geometry={nodes.Coin_Baked.geometry} material={materials.Coin_Baked} />
        </group>
    )
})

useGLTF.preload("/models/coin/Coin.gltf");
