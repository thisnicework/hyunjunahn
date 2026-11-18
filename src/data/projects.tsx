import React from 'react';

export interface Project {
    id: string;
    label: string;
    year?: string;
    title?: string;
    descriptionSnippet?: React.ReactNode;
    specs?: React.ReactNode[];
    services?: string[];
    team?: {
        name: string;
        members: string[];
    };
    vimeoLink?: string;
    videoSrc?: string;
    imageSrc?: string;
    isProfile?: boolean;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    descriptionWidth?: string;
}

export const projects: Project[] = [
    {
        id: 'hyunjunahn',
        label: 'Hyunjun Ahn',
        isProfile: true,
    },
    {
        id: 'greenpig',
        label: 'Green Pig',
        year: '2026',
        title: 'Green Pig',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Coming soon
            </>
        ),
        // imageSrc: '/image/greenpig.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'howtodosomethingforastone',
        label: 'How to do something for a stone',
        year: '2026',
        title: 'How to do something for a stone',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Coming soon
            </>
        ),
        team: {
            name: 'LaNA',
            members: ['Hyunjun Ahn', 'Jaeyoon Cha', 'Jaeyi Cha']
        },
        // imageSrc: '/image/howtodosomethingforastone.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'device',
        label: 'Device',
        year: '2026',
        title: 'Device',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Not archived yet
            </>
        ),
        team: {
            name: 'LaNA',
            members: ['Hyunjun Ahn', 'Jaeyoon Cha', 'Jaeyi Cha']
        },
        // imageSrc: '/image/device.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'personaldecoder',
        label: 'Personal Decoder',
        year: '2026',
        title: 'Personal Decoder',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Not archived yet
            </>
        ),
        team: {
            name: 'SoundNow',
            members: ['Yeji Kim', 'Hyunjun Ahn', 'Geonwoo Kim', 'Seongyeol Lee']
        },
        // imageSrc: '/image/personaldecoder.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: '2.5d',
        label: '2.5D',
        year: '2025',
        title: '2.5D',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Not archived yet
            </>
        ),
        // imageSrc: '/image/2.5d.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'fishtank',
        label: 'Fish Tank',
        year: '2025',
        title: 'Fish Tank',
        textAlign: 'justify',
        descriptionWidth: '410px',
        descriptionSnippet: (
            <>
                Designed to explore "endlessly repeating boundaries beyond boundaries," this mobility device proposes a concept of spatial expansion by translating the fluid movements of a single fish into a mechanical trajectory.<br />
                As the fish swims within the transparent walls of an aquarium tank, its real-time position is captured and converted into omnidirectional motion, allowing the entire structure to maneuver as a singular unit where organic life and machinery merge into one.<br />
                This movement, however, is not a state of complete freedom, as the device is governed by a system that maintains its position within a specific zone through sensors that monitor a virtual perimeter to prevent any escape from the designated area.<br />
                By extending the physical walls of the tank into the programmed virtual boundaries of the system, the work manifests a continuum of constraints where one boundary merely sets the stage for the next, thereby ensuring the device remains strictly confined within a predefined space and revealing the invisible borders that fundamentally define our existence.
            </>
        ),
        specs: [
            'Aquarium unit on motorized steel frame',
            'with computer vision',
            '450mm x 320mm x 1160mm'
        ],
        services: [
            'Goldfish',
            'Mechanum Wheel',
            '4-channel Motor Driver',
            'Teensy 4.1',
            'Pixy 2.1',
            'DWM1000',
        ],
        team: {
            name: 'X34',
            members: ['Hyunjun Ahn', 'Gyungjin Lim', 'Jaeyoon Cha', 'Jaeyi Cha']
        },
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'fishview',
        label: 'Fish View',
        year: '2025',
        title: 'Fish View',
        textAlign: 'justify',
        descriptionWidth: '450px',
        descriptionSnippet: (
            <>
                Inverting the conventional gaze, a rare encounter with the self unfolds through the eyes of the other.<br />
                Two interconnected aquarium units and a ceiling projection operate in synchrony: as a tracking system monitors the movement of a goldfish in the first tank, a camera beneath the second tank follows its trajectory, casting an upward gaze onto the ceiling.<br />
                Looking down into the water, viewers encounter their own image projected above as a reflection set within a vast aquatic void that observes them from the perspective of the gallery space itself.<br />
                This visual inversion is enveloped by a dense soundscape captured by hydrophones, where the minute vibrations of water and the resonance of the surroundings are reconfigured into a low-frequency sonic environment.<br />
                By synchronizing this tactile sound with the displaced gaze, the boundary between the observer and the observed dissolves.<br />
                A new state of self-perception emerges, where one encounters the self through a foreign lens while inhabiting a space where the physical and the reflected are inextricably blurred.
            </>
        ),
        specs: [
            '₁',
            'Aquarium unit on steel frame with',
            'camera movement mechanism and',
            'video/audio output',
            '418mm x 410mm x 794mm',
            // '',
            '₂',
            'Aquarium unit on steel frame',
            'with computer vision',
            '470mm x 520mm x 740mm'
        ],
        services: [
            'Goldfish',
            'Stepper Motor',
            'XY Gantry mechanism',
            'Arduino Nano',
            'Pixy 2.1',
            'NTSC Signal projection',
            'Ambient Hydrophone system'
        ],
        team: {
            name: 'X34',
            members: ['Hyunjun Ahn', 'Gyungjin Lim', 'Jaeyoon Cha', 'Jaeyi Cha']
        },
        imageSrc: '/image/fishviewimage.jpg',
        // vimeoLink: 'https://vimeo.com/780710704/description'
    },
    {
        id: 'other-consciousness',
        label: 'other-consciousness',
        year: '2024',
        title: 'other-consciousness',
        textAlign: 'justify',
        descriptionWidth: '430px',
        descriptionSnippet: (
            <>
                Centered on a task of visual alignment, this interface invites the viewer to maneuver a red circle into a black void using a joystick.<br />
                During this simple act of coordination, the system covertly severs the link between the physical input and the on-screen movement, assuming autonomous control over the object.<br />
                As the transition occurs seamlessly, the viewer operates under the illusion of agency, believing their intentions are still driving the action.<br />
                The loss of control is only revealed when the software deliberately disrupts the trajectory by causing the circle to veer erratically from its path.<br />
                This sudden rupture forces a retrospective inquiry into the boundary between self-will and external governance.<br />
                It leaves the viewer to question the exact moment their autonomy was surrendered to the machine.
            </>
        ),
        specs: [
            'Display mounted on wall with joystick',
            'Dimensions variable'
        ],
        services: [
            'HD LCD Display',
            'Industrial Joystick',
            'Arduino Micro',
            'HTML5 Canvas',
            'Mac Mini'
        ],
        imageSrc: '/image/IMG_2648.jpg',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: 'yawninglink',
        label: 'Yawning Link',
        year: '2024',
        title: 'Yawning Link',
        textAlign: 'justify',
        descriptionWidth: '435px',
        descriptionSnippet: (
            <>
                Exploring the invisible threads of human connectivity beneath conscious recognition, the phenomenon of subconscious contagion manifests through a shared biological rhythm.<br />
                Although the sculpture deliberately avoids eye contact, computer vision monitors the presence of the other, maintaining a silent awareness that exists even before a conscious encounter.<br />
                When a yawn occurs in front of the cast, the sculpture responds by imitating the action, translating an involuntary physiological reflex into a mechanical performance.<br />
                Through this shared gesture, a silent recognition emerges between the two presences, forming a single, unconscious bond.<br />
                This interaction suggests that even in the absence of active engagement or a direct gaze, we remain perceived and connected.<br />
                It reflects a layer of existence where mutual recognition persists within the shadows of the unconscious.
            </>
        ),
        specs: [
            'Electronic circuit on plaster cast',
            'with computer vision',
            // 'Dimensions variable'
        ],
        services: [
            '7-Segment Display',
            'MediaPipe Face Mesh',
            'Arduino Uno',
            'johnny-five.js',
            'Webcam',
            'Macbook Air'
        ],
        imageSrc: '/image/DSC01303.JPG',
        // vimeoLink: 'https://vimeo.com/placeholder'
    },
    {
        id: '0-100',
        label: '0-100',
        year: '2022',
        title: '0-100',
        textAlign: 'justify',
        descriptionWidth: '600px',
        descriptionSnippet: (
            <>
                Relativity of scale manifests through visual parallels between the infinitesimal and the infinite, where clusters of overlapping circular orbits exist as ambiguous entities that neutralize the distinction between subatomic particles and interstellar nebulae.<br />
                By establishing a visual parity between the microcosmic and the macrocosmic, these forms negate the conventional categorization of magnitude to reveal a singular state where the inherent properties of the atomic world and the astronomical are unified into a continuous presence.<br />
                The logic of form persists with consistent intensity across every tier of existence, appearing within the void and the dense formation alike to demonstrate that the internal organization of matter remains constant regardless of absolute volume or the specifics of spatial displacement.
            </>
        ),
        specs: [
            'Oil pastel on sketchbook',
            '148mm × 210mm'
        ],
        // services: [
        // ],
        imageSrc: '/image/DSC01544.jpg',
        // vimeoLink: 'https://vimeo.com/780710704/description'
    },
    {
        id: 'lifetime',
        label: 'Lifetime',
        year: '2021',
        title: 'Lifetime',
        textAlign: 'left',
        descriptionSnippet: (
            <>
                Stopwatch for those who don't<br />
                feel the passage of time.<br />
                It shows you how many seconds<br />
                the user has lived since birth.
            </>
        ),
        specs: [
            'Electronic circuit on stainless',
            'steel pipe',
            '480mm x 120mm x 430mm',
            '2,950g'
        ],
        services: [
            '7-Segments Display',
            'Dynamic driving',
            'Arduino Due',
            'DS1307',
            'Multiple Transistor structure'
        ],
        imageSrc: '/image/DSC00800.jpg',
        vimeoLink: 'https://vimeo.com/780710704'
    },
];
