import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'C.B.M High School',
    subtitle: 'SSC',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'MITHIBAI COLLEGE',
    subtitle: 'HSC',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024-2025',
    title: 'EYECONIC',
    subtitle: 'Operations Assistant',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025-2026',
    title: 'EYECONIC',
    subtitle: 'Operations Manager',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'Currently',
    title: 'EYECONIC',
    subtitle: 'Operations head',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-2, -3 , -35),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Shah and Anchor Kutchhi Enginnering college...',
    subtitle: 'BTECH - ECS',
    position: 'right',
  }
]
