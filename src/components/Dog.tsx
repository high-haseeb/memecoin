import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Eye_low: THREE.Mesh
    armor_low: THREE.SkinnedMesh
    armor_low001: THREE.SkinnedMesh
    clip_4309: THREE.SkinnedMesh
    clip_4310: THREE.SkinnedMesh
    ear_low: THREE.SkinnedMesh
    ear_low001: THREE.SkinnedMesh
    Eyelas_low: THREE.SkinnedMesh
    face_low: THREE.SkinnedMesh
    foot_low: THREE.SkinnedMesh
    foot_low002: THREE.SkinnedMesh
    Jacket_low: THREE.SkinnedMesh
    Neck_low: THREE.SkinnedMesh
    paw_low: THREE.SkinnedMesh
    paw_low001: THREE.SkinnedMesh
    Shirt_low: THREE.SkinnedMesh
    Shirt_low001: THREE.SkinnedMesh
    Shoes_Low: THREE.SkinnedMesh
    Tail_low: THREE.SkinnedMesh
    Trouser_low: THREE.SkinnedMesh
    Hair_low: THREE.Mesh
    cap_low: THREE.Mesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['Body.003']: THREE.MeshStandardMaterial
    ['Body.003']: THREE.MeshStandardMaterial
    Mat_1: THREE.MeshStandardMaterial
  }
}

export function DogModel(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/Dog.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.018}>
        <primitive object={nodes.mixamorigHips} />
        <mesh geometry={nodes.Eye_low.geometry} material={materials['Body.003']} position={[-1.502, -6.669, -85.782]} rotation={[-1.454, 0.018, 0.009]} scale={100} />
        <skinnedMesh geometry={nodes.armor_low.geometry} material={materials['Body.003']} skeleton={nodes.armor_low.skeleton} />
        <skinnedMesh geometry={nodes.armor_low001.geometry} material={materials['Body.003']} skeleton={nodes.armor_low001.skeleton} />
        <skinnedMesh geometry={nodes.clip_4309.geometry} material={materials['Body.003']} skeleton={nodes.clip_4309.skeleton} />
        <skinnedMesh geometry={nodes.clip_4310.geometry} material={materials['Body.003']} skeleton={nodes.clip_4310.skeleton} />
        <skinnedMesh geometry={nodes.ear_low.geometry} material={materials['Body.003']} skeleton={nodes.ear_low.skeleton} />
        <skinnedMesh geometry={nodes.ear_low001.geometry} material={materials['Body.003']} skeleton={nodes.ear_low001.skeleton} />
        <skinnedMesh geometry={nodes.Eyelas_low.geometry} material={materials['Body.003']} skeleton={nodes.Eyelas_low.skeleton} />
        <skinnedMesh geometry={nodes.face_low.geometry} material={materials['Body.003']} skeleton={nodes.face_low.skeleton} />
        <skinnedMesh geometry={nodes.foot_low.geometry} material={materials['Body.003']} skeleton={nodes.foot_low.skeleton} />
        <skinnedMesh geometry={nodes.foot_low002.geometry} material={materials['Body.003']} skeleton={nodes.foot_low002.skeleton} />
        <skinnedMesh geometry={nodes.Jacket_low.geometry} material={materials.Mat_1} skeleton={nodes.Jacket_low.skeleton} />
        <skinnedMesh geometry={nodes.Neck_low.geometry} material={materials['Body.003']} skeleton={nodes.Neck_low.skeleton} />
        <skinnedMesh geometry={nodes.paw_low.geometry} material={materials['Body.003']} skeleton={nodes.paw_low.skeleton} />
        <skinnedMesh geometry={nodes.paw_low001.geometry} material={materials['Body.003']} skeleton={nodes.paw_low001.skeleton} />
        <skinnedMesh geometry={nodes.Shirt_low.geometry} material={materials.Mat_1} skeleton={nodes.Shirt_low.skeleton} />
        <skinnedMesh geometry={nodes.Shirt_low001.geometry} material={materials.Mat_1} skeleton={nodes.Shirt_low001.skeleton} />
        <skinnedMesh geometry={nodes.Shoes_Low.geometry} material={materials.Mat_1} skeleton={nodes.Shoes_Low.skeleton} />
        <skinnedMesh geometry={nodes.Tail_low.geometry} material={materials['Body.003']} skeleton={nodes.Tail_low.skeleton} />
        <skinnedMesh geometry={nodes.Trouser_low.geometry} material={materials.Mat_1} skeleton={nodes.Trouser_low.skeleton} />
      </group>
      <mesh geometry={nodes.Hair_low.geometry} material={materials['Body.003']} position={[0.011, 2.361, 0.048]} rotation={[0.382, 0.075, 0.056]} scale={1.21} />
      <mesh geometry={nodes.cap_low.geometry} material={materials.Mat_1} position={[0.002, 2.733, 0.109]} rotation={[-1.746, 0, -Math.PI]} scale={0.003} />
    </group>
  )
}

useGLTF.preload('/models/Dog.gltf')
