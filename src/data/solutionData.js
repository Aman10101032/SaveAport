// src/data/solutionData.js
import { Droplets, Globe, ShieldCheck, Wrench } from 'lucide-react';

export const highlights = [
    {
        id: 'irrigation',
        icon: Droplets,
        title: 'Irrigation Restoration',
        text: 'Rehabilitate and modernize irrigation infrastructure using efficient delivery and monitoring systems to return optimal moisture levels to orchard soils.',
        color: 'from-blue-400 to-cyan-400',
    },
    {
        id: 'wateruse',
        icon: Globe,
        title: 'Rational Water Use',
        text: 'Introduce community-driven water management: meters, scheduling, and incentive schemes for farmers to conserve water while maintaining yields.',
        color: 'from-emerald-400 to-teal-400',
    },
    {
        id: 'genebank',
        icon: ShieldCheck,
        title: 'Genetic Preservation',
        text: 'Create ex-situ collections and protected mother orchards to safeguard the Aport germplasm and support future breeding programs.',
        color: 'from-yellow-400 to-orange-400',
    },
    {
        id: 'agro',
        icon: Wrench,
        title: 'Agrotechnical Support',
        text: 'Train farmers in pruning, soil science and integrated pest management to increase resilience of existing orchards.',
        color: 'from-red-400 to-pink-400',
    },
];

export const timeline = [
    { year: 'Short term', text: 'Assess irrigation, launch pilot fixes, start nursery propagation programs.' },
    { year: 'Medium term', text: 'Scale irrigation rehabilitation, deploy monitoring, support farmer cooperatives.' },
    { year: 'Long term', text: 'Secure genetic banks, expand agrotourism, integrate Aport into regional branding.' },
];