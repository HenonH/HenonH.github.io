export const profile = {
  name: 'Henon Hailu',
  role: 'Mechatronics Engineering Student',
  tagline: 'I like working on cool challenging physical systems 😼',
  email: 'henonh1@gmail.com',
  resume: './resume.pdf',
}

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    id: 'underwater-actuator',
    title: 'Underwater Actuator',
    subtitle: 'Gen 1 → Gen 2 redesign',
    tags: ['Sealing', 'Actuation', 'CAD', 'Testing'],
    accent: 'from-sky-500/30 to-cyan-400/10',
    problem:
      'Gen 1 worked on the bench but leaked under sustained depth, was hard to service, and lost torque to friction at the shaft seal.',
    whatIDid: [
      'Tore down Gen 1 failures and traced leaks to seal compression and housing tolerance stack-up.',
      'Redesigned the housing and shaft interface for Gen 2 with proper O-ring gland geometry.',
      'Reworked the drivetrain packaging to shrink the envelope and simplify assembly.',
      'Built a pressure test rig and ran iterative wet tests.',
    ],
    focus: ['Static & dynamic sealing', 'Tolerance analysis', 'Torque / friction budgeting', 'DFM & serviceability'],
    results:
      'Gen 2 is smaller, easier to assemble, and holds a seal through repeated pressure cycles where Gen 1 failed.',
    images: ['Gen 1 vs Gen 2 CAD render', 'Exploded assembly', 'Pressure test rig'],
  },
  {
    id: 'custom-ebike',
    title: 'Custom E-Bike',
    subtitle: 'Frame, drivetrain & battery integration',
    tags: ['Power Electronics', 'Fabrication', 'Integration'],
    accent: 'from-amber-500/30 to-orange-400/10',
    problem:
      'Off-the-shelf conversion kits are bulky and poorly integrated. I wanted a clean e-bike with a custom battery pack and tidy wiring.',
    whatIDid: [
      'Sized the motor, controller, and battery for range and hill-climb targets.',
      'Designed and built the battery pack with BMS, fusing, and a custom enclosure.',
      'Fabricated mounts and brackets to integrate everything into the frame.',
      'Tuned controller settings and validated thermals on real rides.',
    ],
    focus: ['Battery pack design', 'Motor & controller sizing', 'Thermal management', 'Mechanical packaging'],
    results:
      'A daily-rideable e-bike with integrated packaging, clean wiring, and predictable thermal behavior.',
    images: ['Full bike photo', 'Battery pack CAD', 'Wiring harness'],
  },
  {
    id: 'biped-robot',
    title: 'Biped Robot',
    subtitle: 'Legged locomotion from scratch',
    tags: ['Robotics', 'Kinematics', 'Controls'],
    accent: 'from-violet-500/30 to-fuchsia-400/10',
    problem:
      'Bipedal walking is unforgiving: mass distribution, joint stiffness, and backlash all show up immediately as instability.',
    whatIDid: [
      'Designed a lightweight leg structure and joint modules in CAD.',
      'Derived leg kinematics and generated gait trajectories.',
      'Selected actuators against torque-speed requirements for each joint.',
      'Integrated electronics and iterated on gait parameters on hardware.',
    ],
    focus: ['Leg kinematics', 'Actuator selection', 'Structural stiffness vs. mass', 'Gait tuning'],
    results:
      'A working biped platform with repeatable joint control, used as a testbed for gait experiments.',
    images: ['Full robot render', 'Leg joint module', 'Walking test'],
  },
  {
    id: 'neuralink',
    title: 'Neuralink',
    subtitle: 'Mechanical engineering work',
    tags: ['Precision Mechanisms', 'Prototyping', 'Medical Devices'],
    accent: 'from-emerald-500/30 to-teal-400/10',
    problem:
      'Hardware for neurotechnology demands tight tolerances, reliability, and fast iteration under real constraints.',
    whatIDid: [
      'Designed and iterated on mechanical components and fixtures.',
      'Rapid-prototyped parts and validated them through hands-on testing.',
      'Worked cross-functionally with electrical and software teams.',
    ],
    focus: ['Precision design', 'Fixture & tooling design', 'Rapid iteration', 'Design for reliability'],
    results:
      'Shipped hardware improvements that supported the team’s development and test workflows. (Details limited by NDA.)',
    images: ['Fixture / component render', 'Prototype photo'],
  },
  {
    id: 'lila-sciences',
    title: 'Lila Sciences',
    subtitle: 'Lab automation hardware',
    tags: ['Automation', 'Electromechanical', 'Lab Systems'],
    accent: 'from-rose-500/30 to-pink-400/10',
    problem:
      'Autonomous science needs robust electromechanical systems that run reliably in a lab with minimal human intervention.',
    whatIDid: [
      'Designed electromechanical subsystems for automated lab workflows.',
      'Built and debugged prototypes, from CAD to physical bring-up.',
      'Tested for reliability and iterated on failure modes.',
    ],
    focus: ['Mechanism design', 'Sensor & actuator integration', 'Reliability testing', 'Systems thinking'],
    results:
      'Delivered working hardware that moved lab automation capabilities forward. (Details limited by NDA.)',
    images: ['Subsystem CAD render', 'Lab prototype'],
  },
  {
    id: 'formlabs',
    title: 'Formlabs',
    subtitle: '3D printer hardware engineering',
    tags: ['Product Design', 'Manufacturing', 'Testing'],
    accent: 'from-indigo-500/30 to-blue-400/10',
    problem:
      'Consumer-grade 3D printers must be manufacturable at scale while hitting tight performance and reliability targets.',
    whatIDid: [
      'Designed and tested mechanical components for printer hardware.',
      'Worked with manufacturing constraints: injection molding, sheet metal, and assembly.',
      'Ran validation tests and translated results into design changes.',
    ],
    focus: ['Design for manufacturing', 'GD&T', 'Validation testing', 'Mass-production constraints'],
    results:
      'Contributed design and test work toward production printer hardware. (Details limited by NDA.)',
    images: ['Component CAD', 'Test setup'],
  },
]

export const skills = [
  {
    category: 'Mechanical',
    items: ['SolidWorks', 'Fusion 360', 'Onshape', 'GD&T', 'FEA', 'Mechanism Design', 'Sealing & Tolerancing', 'DFM / DFA'],
  },
  {
    category: 'Electrical',
    items: ['Circuit Design', 'KiCad', 'Motor Control', 'Battery Systems / BMS', 'Embedded C / Arduino', 'Sensors & Actuators', 'Python', 'MATLAB'],
  },
  {
    category: 'Fabrication',
    items: ['3D Printing (FDM / SLA)', 'CNC Machining', 'Manual Mill & Lathe', 'Laser Cutting', 'Welding', 'Soldering', 'Composites', 'Assembly & Wiring'],
  },
]
