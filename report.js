/* ═══════════════════════════════════════════════════════════
   CRF IIT Delhi – Report Data & Charts  (report.js)
   ═══════════════════════════════════════════════════════════ */

/* ── RAW DATA from booking images ─────────────────────────── */
const RAW = [
  { facility: '3D Lab ( 3D Printer )', cat: 'External Student / Faculty', samples: 0, appts: 3, amount: 0 },
  { facility: '3D Lab ( 3D Printer )', cat: 'IITD Internal', samples: 373, appts: 58, amount: 116742 },
  { facility: '3D Lab ( Laser Cutting Machine )', cat: 'IITD Internal', samples: 1484, appts: 94, amount: 237778 },
  { facility: 'Additive Manufacturing and Characterization Facility (High-Resolution Stereo Optical Microscope)', cat: 'External Student / Faculty', samples: 4, appts: 3, amount: 3000 },
  { facility: 'Advanced Electrical Characterization Facility (Cryo. Prober setup)', cat: 'IITD Internal', samples: 14, appts: 14, amount: 14005 },
  { facility: 'Advanced Electrical Characterization Facility', cat: 'IITD Internal', samples: 7, appts: 7, amount: 3500 },
  { facility: 'Advanced Electrical Characterization Facility', cat: 'IITD Internal', samples: 8, appts: 8, amount: 4000 },
  { facility: 'Advanced Electrical Characterization Facility', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 3750 },
  { facility: 'Advanced Electrical Characterization Facility', cat: 'IITD Internal', samples: 3, appts: 3, amount: 750 },
  { facility: 'Advanced Manufacturing and Materials Characterizat', cat: 'IITD Internal', samples: 14, appts: 14, amount: 14000 },
  { facility: 'Advanced Manufacturing and Materials Characterizat', cat: 'IITD Internal', samples: 24, appts: 24, amount: 6000 },
  { facility: 'Advanced Manufacturing and Materials Characterizat', cat: 'IITD Internal', samples: 21, appts: 21, amount: 10500 },
  { facility: 'Advanced Manufacturing and Materials Characterizat', cat: 'IITD Internal', samples: 14, appts: 14, amount: 8400 },
  { facility: 'AFM with Glove Box', cat: 'IITD Internal', samples: 204, appts: 93, amount: 102000 },
  { facility: 'AFM with Glove Box', cat: 'Industrial', samples: 6, appts: 4, amount: 36000 },
  { facility: 'AFM with Glove Box', cat: 'External Student / Faculty', samples: 47, appts: 29, amount: 70502 },
  { facility: 'AFM', cat: 'IITD Internal', samples: 87, appts: 24, amount: 45000 },
  { facility: 'AFM', cat: 'External Student / Faculty', samples: 28, appts: 19, amount: 42000 },
  { facility: 'AFM', cat: 'IITD Internal', samples: 585, appts: 200, amount: 303000 },
  { facility: 'Atom Probe Tomography Facility (APT)', cat: 'IITD Internal', samples: 7, appts: 7, amount: 700000 },
  { facility: 'BET Facility (Sonipat)', cat: 'External Student / Faculty', samples: 229, appts: 123, amount: 458000 },
  { facility: 'BET Facility (Sonipat)', cat: 'Industrial', samples: 19, appts: 11, amount: 76000 },
  { facility: 'BET Facility (Sonipat)', cat: 'IITD Internal', samples: 259, appts: 134, amount: 259000 },
  { facility: 'BET Facility (Sonipat)', cat: 'R&D Institute', samples: 5, appts: 3, amount: 10000 },
  { facility: 'Blue Laser System with Welding Head Facility', cat: 'IITD Internal', samples: 7, appts: 7, amount: 28000 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 60, appts: 28, amount: 18000 },
  { facility: 'Cell Biology Lab', cat: 'External Student / Faculty', samples: 19, appts: 6, amount: 19000 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 17, appts: 17, amount: 5100 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 2, appts: 1, amount: 400 },
  { facility: 'Cell Biology Lab', cat: 'External Student / Faculty', samples: 10, appts: 6, amount: 10000 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 573, appts: 139, amount: 200550 },
  { facility: 'Cell Biology Lab (Sonipat Campus)', cat: 'IITD Internal', samples: 2, appts: 2, amount: 400 },
  { facility: 'Cell Biology Lab (Sonipat Campus)', cat: 'External Student / Faculty', samples: 9, appts: 9, amount: 3600 },
  { facility: 'Cell Biology Lab', cat: 'Industrial', samples: 53, appts: 21, amount: 79500 },
  { facility: 'Cell Biology Lab', cat: 'External Student / Faculty', samples: 37, appts: 16, amount: 29600 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 8, appts: 4, amount: 4000 },
  { facility: 'Cell Biology Lab', cat: 'IITD Internal', samples: 3, appts: 3, amount: 600 },
  { facility: 'Cell Biology Lab', cat: 'External Student / Faculty', samples: 1, appts: 1, amount: 800 },
  { facility: 'Central Machining facility', cat: 'IITD Internal', samples: 12, appts: 6, amount: 1800 },
  { facility: 'Central Machining facility', cat: 'IITD Internal', samples: 17, appts: 8, amount: 6500 },
  { facility: 'Central Machining facility', cat: 'IITD Internal', samples: 2, appts: 1, amount: 900 },
  { facility: 'Central Machining facility', cat: 'IITD Internal', samples: 14, appts: 7, amount: 4200 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'IITD Internal', samples: 404, appts: 323, amount: 40400 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'External Student / Faculty', samples: 6, appts: 6, amount: 1500 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'External Student / Faculty', samples: 191, appts: 63, amount: 103760 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'Industrial', samples: 123, appts: 26, amount: 163120 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'IITD Internal', samples: 713, appts: 231, amount: 74600 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'R&D Institute', samples: 20, appts: 8, amount: 15000 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'IITD Internal', samples: 466, appts: 314, amount: 46600 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'Industrial', samples: 1, appts: 1, amount: 1000 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'Industrial', samples: 10, appts: 6, amount: 30000 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'External Student / Faculty', samples: 256, appts: 96, amount: 265110 },
  { facility: 'Chemical Synthesis and Characterisation lab', cat: 'IITD Internal', samples: 315, appts: 85, amount: 33000 },
  { facility: 'Chemisorption catalyst analyser Lab', cat: 'Industrial', samples: 2, appts: 2, amount: 8000 },
  { facility: 'Chemisorption catalyst analyser Lab', cat: 'IITD Internal', samples: 18, appts: 18, amount: 9000 },
  { facility: 'Chemisorption catalyst analyser Lab', cat: 'External Student / Faculty', samples: 191, appts: 189, amount: 210100 },
  { facility: 'Chemistry Department Utilities', cat: 'IITD Internal', samples: 2458, appts: 2451, amount: 1 },
  { facility: 'CIRCULAR DICHROISM SPECTROMETER (CD)', cat: 'IITD Internal', samples: 150, appts: 115, amount: 30000 },
  { facility: 'CIRCULAR DICHROISM SPECTROMETER (CD)', cat: 'External Student / Faculty', samples: 109, appts: 45, amount: 110181 },
  { facility: 'CNC Wire-cut EDM', cat: 'External Student / Faculty', samples: 4, appts: 4, amount: 3200 },
  { facility: 'CNC Wire-cut EDM', cat: 'IITD Internal', samples: 41, appts: 21, amount: 34800 },
  { facility: 'Confocal Facility', cat: 'External Student / Faculty', samples: 6, appts: 4, amount: 6350 },
  { facility: 'Confocal Facility', cat: 'IITD Internal', samples: 207, appts: 78, amount: 77750 },
  { facility: 'Confocal Facility', cat: 'Industrial', samples: 3, appts: 1, amount: 6000 },
  { facility: 'EPMA Facility', cat: 'External Student / Faculty', samples: 42, appts: 43, amount: 63000 },
  { facility: 'EPMA Facility', cat: 'Industrial', samples: 18, appts: 18, amount: 54000 },
  { facility: 'EPMA Facility', cat: 'IITD Internal', samples: 286, appts: 280, amount: 110720 },
  { facility: 'EPMA Facility', cat: 'R&D Institute', samples: 6, appts: 6, amount: 18000 },
  { facility: 'EPR Spectroscopy Lab', cat: 'External Student / Faculty', samples: 246, appts: 90, amount: 123590 },
  { facility: 'EPR Spectroscopy Lab', cat: 'IITD Internal', samples: 305, appts: 118, amount: 45750 },
  { facility: 'EPR Spectroscopy Lab', cat: 'IITD Internal', samples: 12, appts: 5, amount: 1800 },
  { facility: 'EPR Spectroscopy Lab', cat: 'External Student / Faculty', samples: 19, appts: 12, amount: 19000 },
  { facility: 'Femto SLCS Lab', cat: 'R&D Institute', samples: 16, appts: 11, amount: 80000 },
  { facility: 'Femto SLCS Lab', cat: 'External Student / Faculty', samples: 10, appts: 7, amount: 30000 },
  { facility: 'Femto SLCS Lab', cat: 'IITD Internal', samples: 141, appts: 79, amount: 142000 },
  { facility: 'FESEM', cat: 'External Student / Faculty', samples: 45, appts: 14, amount: 42325 },
  { facility: 'FESEM', cat: 'Industrial', samples: 3, appts: 2, amount: 6000 },
  { facility: 'FESEM', cat: 'IITD Internal', samples: 1096, appts: 272, amount: 246700 },
  { facility: 'FESEM', cat: 'R&D Institute', samples: 6, appts: 2, amount: 12000 },
  { facility: 'FESEM EDX Block-4', cat: 'IITD Internal', samples: 16, appts: 4, amount: 4800 },
  { facility: 'Flow Cytometer', cat: 'IITD Internal', samples: 232, appts: 202, amount: 232000 },
  { facility: 'Flow Cytometer', cat: 'External Student / Faculty', samples: 5, appts: 5, amount: 5000 },
  { facility: 'FTIR Lab', cat: 'IITD Internal', samples: 1052, appts: 356, amount: 355500 },
  { facility: 'FTIR Lab', cat: 'Industrial', samples: 10, appts: 8, amount: 25000 },
  { facility: 'FTIR Lab', cat: 'External Student / Faculty', samples: 87, appts: 30, amount: 77370 },
  { facility: 'GCMS Facility', cat: 'IITD Internal', samples: 38, appts: 7, amount: 4100 },
  { facility: 'GCMS Facility', cat: 'External Student / Faculty', samples: 22, appts: 5, amount: 25000 },
  { facility: 'GCMS Facility', cat: 'Industrial', samples: 9, appts: 5, amount: 27000 },
  { facility: 'GLASS BLOWING WORKSHOP', cat: 'External Student / Faculty', samples: 10, appts: 6, amount: 9822 },
  { facility: 'GLASS BLOWING WORKSHOP', cat: 'IITD Internal', samples: 532, appts: 297, amount: 532573 },
  { facility: 'HR-TEM', cat: 'IITD Internal', samples: 39, appts: 34, amount: 19501 },
  { facility: 'HRTEM -200KeV (Sonipat Campus)', cat: 'External Student / Faculty', samples: 5, appts: 2, amount: 14000 },
  { facility: 'HRTEM -200KeV (Sonipat Campus)', cat: 'IITD Internal', samples: 39, appts: 21, amount: 20670 },
  { facility: 'HRTEM -200KeV (Sonipat Campus)', cat: 'IITD Internal', samples: 9, appts: 3, amount: 0 },
  { facility: 'HRTEM -200KeV', cat: 'IITD Internal', samples: 843, appts: 384, amount: 446795 },
  { facility: 'HRTEM -200KeV', cat: 'R&D Institute', samples: 1, appts: 1, amount: 5300 },
  { facility: 'HRTEM -200KeV', cat: 'External Student / Faculty', samples: 191, appts: 113, amount: 534802 },
  { facility: 'ICP MS', cat: 'R&D Institute', samples: 36, appts: 1, amount: 75600 },
  { facility: 'ICP MS', cat: 'External Student / Faculty', samples: 816, appts: 66, amount: 571928 },
  { facility: 'ICP MS', cat: 'Industrial', samples: 25, appts: 7, amount: 52500 },
  { facility: 'ICP MS', cat: 'IITD Internal', samples: 1771, appts: 147, amount: 444250 },
  { facility: 'ICP MS', cat: 'IITD Internal', samples: 400, appts: 96, amount: 160000 },
  { facility: 'ICP MS', cat: 'External Student / Faculty', samples: 151, appts: 51, amount: 151000 },
  { facility: 'ICP MS', cat: 'Industrial', samples: 7, appts: 5, amount: 17500 },
  { facility: 'ICP MS', cat: 'R&D Institute', samples: 46, appts: 11, amount: 115000 },
  { facility: 'Ion Milling', cat: 'External Student / Faculty', samples: 12, appts: 12, amount: 36000 },
  { facility: 'Ion Milling', cat: 'IITD Internal', samples: 81, appts: 81, amount: 121500 },
  { facility: 'IR Scanner / Imager Facility', cat: 'IITD Internal', samples: 13, appts: 13, amount: 2600 },
  { facility: 'Liquid Nitrogen', cat: 'IITD Internal', samples: 41604, appts: 1230, amount: 1331328 },
  { facility: 'Maintenance Facility', cat: 'IITD Internal', samples: 61, appts: 61, amount: 30500 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 41, appts: 58, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 683, appts: 618, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 1, appts: 1, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 144, appts: 144, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 7, appts: 18, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 35, appts: 42, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 600, appts: 593, amount: 20 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 17, appts: 19, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 18, appts: 18, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 43, appts: 43, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 218, appts: 218, amount: 0 },
  { facility: 'Makerspace IITD', cat: 'IITD Internal', samples: 19, appts: 26, amount: 0 },
  { facility: 'MBE Lab', cat: 'IITD Internal', samples: 24, appts: 20, amount: 4800 },
  { facility: 'MBE Lab', cat: 'External Student / Faculty', samples: 28, appts: 25, amount: 14000 },
  { facility: 'Metal 3D printing (Shared Facility) IITD', cat: 'IITD Internal', samples: 7, appts: 7, amount: 340800 },
  { facility: 'Metal 3D printing', cat: 'IITD Internal', samples: 64, appts: 9, amount: 188300 },
  { facility: 'Micro CT Scanner', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 126000 },
  { facility: 'Micro CT Scanner', cat: 'R&D Institute', samples: 1, appts: 1, amount: 50000 },
  { facility: 'Micro CT Scanner', cat: 'IITD Internal', samples: 3, appts: 3, amount: 96500 },
  { facility: 'Micro Raman Spectroscopy Facility', cat: 'External Student / Faculty', samples: 44, appts: 16, amount: 26400 },
  { facility: 'Micro Raman Spectroscopy Facility', cat: 'IITD Internal', samples: 1286, appts: 403, amount: 197940 },
  { facility: 'Micro Raman Spectroscopy Facility', cat: 'External Student / Faculty', samples: 90, appts: 28, amount: 54000 },
  { facility: 'Micro Raman Spectroscopy Facility', cat: 'IITD Internal', samples: 684, appts: 205, amount: 104250 },
  { facility: 'Micro Raman Spectroscopy Facility', cat: 'Industrial', samples: 22, appts: 7, amount: 133100 },
  { facility: 'MPMS3 SQUID Magnetometer Facility', cat: 'IITD Internal', samples: 3, appts: 3, amount: 12000 },
  { facility: 'MPMS3 SQUID Magnetometer Facility', cat: 'External Student / Faculty', samples: 2, appts: 2, amount: 8000 },
  { facility: 'MPMS3 SQUID Magnetometer Facility', cat: 'External Student / Faculty', samples: 1, appts: 1, amount: 3500 },
  { facility: 'MPMS3 SQUID Magnetometer Facility', cat: 'IITD Internal', samples: 25, appts: 26, amount: 37500 },
  { facility: 'Multi-Functional Tribotester', cat: 'IITD Internal', samples: 5, appts: 2, amount: 1500 },
  { facility: 'Multi-Functional Tribotester', cat: 'IITD Internal', samples: 60, appts: 52, amount: 18300 },
  { facility: 'Multi-Functional Tribotester', cat: 'External Student / Faculty', samples: 6, appts: 5, amount: 3600 },
  { facility: 'Multi-Functional Tribotester', cat: 'IITD Internal', samples: 8, appts: 6, amount: 2400 },
  { facility: 'Multi-Functional Tribotester', cat: 'External Student / Faculty', samples: 1, appts: 1, amount: 600 },
  { facility: 'Multi-Functional Tribotester', cat: 'IITD Internal', samples: 6, appts: 4, amount: 1800 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 3, appts: 1, amount: 6000 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 1671, appts: 1214, amount: 50131 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 0, appts: 1, amount: 0 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 541, appts: 541, amount: 10820 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 1337, appts: 1034, amount: 40111 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 2, appts: 2, amount: 1000 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 463, appts: 460, amount: 9260 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 5, appts: 1, amount: 15000 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 114, appts: 117, amount: 11400 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 6, appts: 2, amount: 9000 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 171, appts: 147, amount: 6840 },
  { facility: 'NMR Central Facility', cat: 'IITD Internal', samples: 76, appts: 76, amount: 2280 },
  { facility: 'NMR Central Facility', cat: 'External Student / Faculty', samples: 9, appts: 2, amount: 4500 },
  { facility: 'Photoluminescence Lab', cat: 'External Student / Faculty', samples: 3, appts: 9, amount: 3000 },
  { facility: 'Photoluminescence Lab', cat: 'IITD Internal', samples: 28, appts: 26, amount: 14500 },
  { facility: 'Photovoltaic EQE (IPCE)/IQE Facility', cat: 'IITD Internal', samples: 18, appts: 10, amount: 5400 },
  { facility: 'PPMS Sonipat Campus', cat: 'IITD Internal', samples: 123, appts: 123, amount: 123000 },
  { facility: 'PPMS Sonipat Campus', cat: 'External Student / Faculty', samples: 18, appts: 18, amount: 72000 },
  { facility: 'PPMS Sonipat Campus', cat: 'Industrial', samples: 1, appts: 1, amount: 8000 },
  { facility: 'PPMS Sonipat Campus', cat: 'IITD Internal', samples: 167, appts: 167, amount: 167000 },
  { facility: 'PPMS Sonipat Campus', cat: 'External Student / Faculty', samples: 35, appts: 35, amount: 140000 },
  { facility: 'RF and Microwave Facility', cat: 'Industrial', samples: 3, appts: 3, amount: 15000 },
  { facility: 'RF and Microwave Facility', cat: 'External Student / Faculty', samples: 3, appts: 2, amount: 8360 },
  { facility: 'RF and Microwave Facility', cat: 'IITD Internal', samples: 19, appts: 17, amount: 13300 },
  { facility: 'Rheometer', cat: 'Industrial', samples: 25, appts: 10, amount: 60000 },
  { facility: 'Rheometer', cat: 'IITD Internal', samples: 172, appts: 62, amount: 103200 },
  { facility: 'Rheometer', cat: 'External Student / Faculty', samples: 77, appts: 39, amount: 92400 },
  { facility: 'SAXS Sonipat Campus', cat: 'Industrial', samples: 45, appts: 7, amount: 123040 },
  { facility: 'SAXS Sonipat Campus', cat: 'External Student / Faculty', samples: 80, appts: 38, amount: 60000 },
  { facility: 'SAXS Sonipat Campus', cat: 'IITD Internal', samples: 181, appts: 61, amount: 41800 },
  { facility: 'Scanning Tunneling Microscope', cat: 'IITD Internal', samples: 45, appts: 45, amount: 90000 },
  { facility: 'Scanning Tunneling Microscope', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 15000 },
  { facility: 'SEM LAB', cat: 'IITD Internal', samples: 78, appts: 27, amount: 39000 },
  { facility: 'SEM LAB', cat: 'Industrial', samples: 27, appts: 10, amount: 86400 },
  { facility: 'SEM LAB', cat: 'External Student / Faculty', samples: 130, appts: 44, amount: 165450 },
  { facility: 'SEM LAB', cat: 'IITD Internal', samples: 5819, appts: 1443, amount: 2041801 },
  { facility: 'SEM LAB', cat: 'R&D Institute', samples: 4, appts: 2, amount: 12000 },
  { facility: 'SEM LAB', cat: 'IITD Internal', samples: 42, appts: 34, amount: 21000 },
  { facility: 'SEM LAB', cat: 'R&D Institute', samples: 3, appts: 1, amount: 6000 },
  { facility: 'SEM LAB', cat: 'External Student / Faculty', samples: 241, appts: 89, amount: 211725 },
  { facility: 'SEM LAB', cat: 'Industrial', samples: 9, appts: 4, amount: 18000 },
  { facility: 'SEM LAB', cat: 'IITD Internal', samples: 3415, appts: 1079, amount: 606375 },
  { facility: 'Single Crystal XRD Facility (IITD)', cat: 'IITD Internal', samples: 54, appts: 28, amount: 162000 },
  { facility: 'Single Crystal XRD Facility (IITD)', cat: 'External Student / Faculty', samples: 7, appts: 7, amount: 35000 },
  { facility: 'TEM Grids Central Facility', cat: 'IITD Internal', samples: 534, appts: 212, amount: 267000 },
  { facility: 'TEM Grids Central Facility', cat: 'IITD Internal', samples: 98, appts: 45, amount: 49000 },
  { facility: 'TEM Grids Central Facility', cat: 'IITD Internal', samples: 24, appts: 14, amount: 12000 },
  { facility: 'TEM Lab (EX Hall)', cat: 'R&D Institute', samples: 5, appts: 5, amount: 15000 },
  { facility: 'TEM Lab (EX Hall)', cat: 'Industrial', samples: 316, appts: 316, amount: 1422000 },
  { facility: 'TEM Lab (EX Hall)', cat: 'External Student / Faculty', samples: 30, appts: 39, amount: 60000 },
  { facility: 'TEM Lab (EX Hall)', cat: 'IITD Internal', samples: 555, appts: 552, amount: 153175 },
  { facility: 'TEM Lab (EX Hall)', cat: 'Industrial', samples: 9, appts: 11, amount: 40500 },
  { facility: 'TEM Lab (EX Hall)', cat: 'External Student / Faculty', samples: 76, appts: 80, amount: 156000 },
  { facility: 'TEM Lab (EX Hall)', cat: 'IITD Internal', samples: 558, appts: 440, amount: 156725 },
  { facility: 'TEM Lab (EX Hall)', cat: 'IITD Internal', samples: 79, appts: 79, amount: 0 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'External Student / Faculty', samples: 33, appts: 32, amount: 99000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'IITD Internal', samples: 154, appts: 154, amount: 231000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'Industrial', samples: 4, appts: 4, amount: 18000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'IITD Internal', samples: 18, appts: 18, amount: 18000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'External Student / Faculty', samples: 4, appts: 4, amount: 8000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'External Student / Faculty', samples: 13, appts: 14, amount: 39000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'IITD Internal', samples: 92, appts: 92, amount: 138000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 6000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'R&D Institute', samples: 1, appts: 1, amount: 3000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'IITD Internal', samples: 3, appts: 3, amount: 3000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'Industrial', samples: 6, appts: 4, amount: 24000 },
  { facility: 'Thermal Series Sonipat Campus', cat: 'External Student / Faculty', samples: 2, appts: 2, amount: 4001 },
  { facility: 'TOF-SIMS Lab', cat: 'Industrial', samples: 4, appts: 5, amount: 48000 },
  { facility: 'TOF-SIMS Lab', cat: 'External Student / Faculty', samples: 23, appts: 23, amount: 115000 },
  { facility: 'TOF-SIMS Lab', cat: 'IITD Internal', samples: 47, appts: 49, amount: 117500 },
  { facility: 'Ultramicrotome Facility', cat: 'IITD Internal', samples: 32, appts: 17, amount: 24000 },
  { facility: 'Ultramicrotome Facility', cat: 'External Student / Faculty', samples: 2, appts: 2, amount: 6000 },
  { facility: 'Ultramicrotome Facility', cat: 'IITD Internal', samples: 45, appts: 33, amount: 11250 },
  { facility: 'Ultramicrotome Facility', cat: 'External Student / Faculty', samples: 23, appts: 22, amount: 46000 },
  { facility: 'Ultramicrotome Facility', cat: 'Industrial', samples: 1, appts: 1, amount: 4500 },
  { facility: 'UTM', cat: 'IITD Internal', samples: 29, appts: 13, amount: 5800 },
  { facility: 'UTM (Sonipat Campus)', cat: 'External Student / Faculty', samples: 272, appts: 57, amount: 138360 },
  { facility: 'UTM (Sonipat Campus)', cat: 'Industrial', samples: 167, appts: 36, amount: 167000 },
  { facility: 'UTM (Sonipat Campus)', cat: 'IITD Internal', samples: 428, appts: 101, amount: 86200 },
  { facility: 'UV-VIS-NIR Spectrometer', cat: 'IITD Internal', samples: 185, appts: 97, amount: 18500 },
  { facility: 'UV-VIS-NIR Spectrometer', cat: 'Industrial', samples: 9, appts: 5, amount: 18000 },
  { facility: 'UV-VIS-NIR Spectrometer', cat: 'External Student / Faculty', samples: 95, appts: 51, amount: 47500 },
  { facility: 'UV-VIS-NIR Spectrometer', cat: 'R&D Institute', samples: 5, appts: 3, amount: 5000 },
  { facility: 'UV-VIS-NIR SPECTROMETER', cat: 'IITD Internal', samples: 15, appts: 12, amount: 1500 },
  { facility: 'UV-VIS-NIR SPECTROMETER', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 1500 },
  { facility: 'UV-VIS-NIR SPECTROMETER', cat: 'IITD Internal', samples: 10, appts: 9, amount: 1100 },
  { facility: 'UV-VIS-NIR SPECTROMETER', cat: 'External Student / Faculty', samples: 3, appts: 3, amount: 1500 },
  { facility: 'WIRE ELECTRO-DISCHARGE MACHINE', cat: 'IITD Internal', samples: 6, appts: 6, amount: 3600 },
  { facility: 'XPS Sonipat Campus', cat: 'External Student / Faculty', samples: 148, appts: 83, amount: 226770 },
  { facility: 'XPS Sonipat Campus', cat: 'IITD Internal', samples: 684, appts: 341, amount: 534000 },
  { facility: 'XPS Sonipat Campus', cat: 'R&D Institute', samples: 6, appts: 3, amount: 9000 },
  { facility: 'XPS Sonipat Campus', cat: 'Industrial', samples: 6, appts: 3, amount: 18000 },
  { facility: 'XPS Sonipat Campus', cat: 'IITD Internal', samples: 29, appts: 12, amount: 43500 },
  { facility: 'XPS Sonipat Campus', cat: 'External Student / Faculty', samples: 14, appts: 4, amount: 42000 },
  { facility: 'XRD Lab Textile', cat: 'External Student / Faculty', samples: 71, appts: 33, amount: 50080 },
  { facility: 'XRD Lab Textile', cat: 'Industrial', samples: 25, appts: 14, amount: 61200 },
  { facility: 'XRD Lab Textile', cat: 'IITD Internal', samples: 511, appts: 278, amount: 106850 },
  { facility: 'XRD Sonipat Campus', cat: 'Industrial', samples: 3, appts: 1, amount: 4500 },
  { facility: 'XRD Sonipat Campus', cat: 'External Student / Faculty', samples: 20, appts: 8, amount: 12212 },
  { facility: 'XRD Sonipat Campus', cat: 'IITD Internal', samples: 681, appts: 197, amount: 141450 },
  { facility: 'XRD Sonipat Campus', cat: 'IITD Internal', samples: 273, appts: 76, amount: 56350 },
  { facility: 'XRD Sonipat Campus', cat: 'External Student / Faculty', samples: 5, appts: 3, amount: 2500 },
  { facility: 'XRD Sonipat Campus', cat: 'IITD Internal', samples: 68, appts: 12, amount: 12250 },
  { facility: 'XRD Sonipat Campus', cat: 'External Student / Faculty', samples: 6, appts: 1, amount: 4500 },
  { facility: 'XRD Sonipat Campus', cat: 'IITD Internal', samples: 72, appts: 12, amount: 18750 },
  { facility: 'XRD Sonipat Campus', cat: 'IITD Internal', samples: 210, appts: 42, amount: 38850 },
  { facility: 'XRD Sonipat Campus', cat: 'External Student / Faculty', samples: 13, appts: 4, amount: 6500 },
  { facility: 'XRD Sonipat Campus', cat: 'Industrial', samples: 1, appts: 1, amount: 1500 },


];

/* ── Category colour map ────────────────────────────────────── */
const CAT_COLORS = {
  'IITD Internal':            { bg:'rgba(37,99,235,0.75)',   border:'#3b82f6' },
  'External Student / Faculty':{ bg:'rgba(5,150,105,0.75)',  border:'#34d399' },
  'Industrial':               { bg:'rgba(217,119,6,0.75)',   border:'#fbbf24' },
  'R&D Institute':            { bg:'rgba(124,58,237,0.75)',  border:'#a78bfa' },
};

const CAT_ORDER = ['IITD Internal','External Student / Faculty','Industrial','R&D Institute'];

const CHART_FONT = { family:"'Inter', system-ui, sans-serif", size:12, color:'#8b949e' };

/* ── Chart.js global defaults ────────────────────────────────── */
Chart.defaults.color = '#8b949e';
Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.plugins.legend.labels.boxWidth = 12;
Chart.defaults.plugins.legend.labels.padding = 16;

/* ══════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
══════════════════════════════════════════════════════════════ */
function fmt(n) { return n.toLocaleString('en-IN'); }
function fmtCur(n) { return '₹' + n.toLocaleString('en-IN'); }

/** Filter data by current active category (or 'all') */
let activeFilter = 'all';

function filtered() {
  if (activeFilter === 'all') return RAW;
  return RAW.filter(r => r.cat === activeFilter);
}

/* ── Aggregate by field ──────────────────────────────────────── */
function aggregateBy(data, key, valKey = 'samples') {
  const map = {};
  data.forEach(r => {
    const k = r[key];
    map[k] = (map[k] || 0) + r[valKey];
  });
  return map;
}

/* ── Sort object entries by value descending, take top N ─────── */
function topN(obj, n = 15) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

/* ══════════════════════════════════════════════════════════════
   KPI COUNTERS
══════════════════════════════════════════════════════════════ */
function animateCounter(el, target, prefix = '', suffix = '') {
  const dur = 1200;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(target * ease);
    el.textContent = prefix + fmt(val) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function updateKPIs() {
  const data = filtered();
  const totalSamples  = data.reduce((s, r) => s + r.samples, 0);
  const totalAppts    = data.reduce((s, r) => s + r.appts,   0);
  const totalRevenue  = data.reduce((s, r) => s + r.amount,  0);
  const facCount      = new Set(data.map(r => r.facility)).size;

  animateCounter(document.getElementById('kpi-samples'),  totalSamples);
  animateCounter(document.getElementById('kpi-appts'),    totalAppts);
  animateCounter(document.getElementById('kpi-revenue'),  totalRevenue, '₹');
  document.getElementById('kpi-facilities').textContent = facCount;
}

/* ══════════════════════════════════════════════════════════════
   CHART INSTANCES (store for destroy/recreate on filter)
══════════════════════════════════════════════════════════════ */
const charts = {};

function destroyChart(id) { if (charts[id]) { charts[id].destroy(); delete charts[id]; } }

/* ══════════════════════════════════════════════════════════════
   1. DONUT – Sample Distribution by Category
══════════════════════════════════════════════════════════════ */
function buildPieChart() {
  destroyChart('pie');
  const data = filtered();
  const bycat = aggregateBy(data, 'cat', 'samples');

  const labels = CAT_ORDER.filter(c => bycat[c] > 0);
  const vals   = labels.map(c => bycat[c]);
  const bgs    = labels.map(c => CAT_COLORS[c].bg);
  const borders= labels.map(c => CAT_COLORS[c].border);

  // Legend
  const legendEl = document.getElementById('pieLegend');
  legendEl.innerHTML = labels.map((lbl, i) =>
    `<span class="legend-item"><span class="legend-dot" style="background:${borders[i]}"></span>${lbl}: <strong>${fmt(vals[i])}</strong></span>`
  ).join('');

  charts['pie'] = new Chart(document.getElementById('chartSamplePie'), {
    type: 'doughnut',
    data: { labels, datasets: [{ data: vals, backgroundColor: bgs, borderColor: borders, borderWidth: 2, hoverOffset: 8 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${fmt(ctx.raw)} samples (${((ctx.raw/vals.reduce((a,b)=>a+b,0))*100).toFixed(1)}%)`
          }
        }
      },
      cutout: '60%',
      animation: { animateRotate: true, duration: 900 }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   2. BAR – Revenue by Category
══════════════════════════════════════════════════════════════ */
function buildRevenueCatChart() {
  destroyChart('revcat');
  const data = filtered();
  const bycat = aggregateBy(data, 'cat', 'amount');
  const labels = CAT_ORDER.filter(c => bycat[c] > 0);
  const vals   = labels.map(c => bycat[c]);
  const bgs    = labels.map(c => CAT_COLORS[c].bg);
  const borders= labels.map(c => CAT_COLORS[c].border);

  charts['revcat'] = new Chart(document.getElementById('chartRevenueCat'), {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Revenue (₹)', data: vals, backgroundColor: bgs, borderColor: borders, borderWidth: 2, borderRadius: 8 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmtCur(ctx.raw) } } },
      scales: {
        x: { grid: { color: '#2a3245' }, ticks: { font: { size: 11 } } },
        y: { grid: { color: '#2a3245' }, ticks: { callback: v => '₹' + (v >= 1e6 ? (v/1e6).toFixed(1)+'M' : v >= 1e3 ? (v/1e3).toFixed(0)+'K' : v) } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   3. BAR – Internal vs External Samples (grouped)
══════════════════════════════════════════════════════════════ */
function buildIntExtSamples() {
  destroyChart('intexts');
  const data = RAW; // always use full data for comparison
  const internalSamples  = data.filter(r => r.cat === 'IITD Internal').reduce((s,r)=>s+r.samples,0);
  const externalSamples  = data.filter(r => r.cat !== 'IITD Internal').reduce((s,r)=>s+r.samples,0);
  const exStudFacSamples = data.filter(r => r.cat === 'External Student / Faculty').reduce((s,r)=>s+r.samples,0);
  const indSamples       = data.filter(r => r.cat === 'Industrial').reduce((s,r)=>s+r.samples,0);
  const rdSamples        = data.filter(r => r.cat === 'R&D Institute').reduce((s,r)=>s+r.samples,0);

  charts['intexts'] = new Chart(document.getElementById('chartIntExtSamples'), {
    type: 'bar',
    data: {
      labels: ['IITD Internal','Ext. Student/Faculty','Industrial','R&D Institute'],
      datasets: [{
        label: 'Samples',
        data: [internalSamples, exStudFacSamples, indSamples, rdSamples],
        backgroundColor: [
          CAT_COLORS['IITD Internal'].bg,
          CAT_COLORS['External Student / Faculty'].bg,
          CAT_COLORS['Industrial'].bg,
          CAT_COLORS['R&D Institute'].bg,
        ],
        borderColor: [
          CAT_COLORS['IITD Internal'].border,
          CAT_COLORS['External Student / Faculty'].border,
          CAT_COLORS['Industrial'].border,
          CAT_COLORS['R&D Institute'].border,
        ],
        borderWidth: 2, borderRadius: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) + ' samples' } } },
      scales: {
        x: { grid: { color: '#2a3245' } },
        y: { grid: { color: '#2a3245' }, ticks: { callback: v => fmt(v) } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   4. BAR – Internal vs External Revenue
══════════════════════════════════════════════════════════════ */
function buildIntExtRevenue() {
  destroyChart('intextr');
  const data = RAW;
  const internalRev  = data.filter(r => r.cat === 'IITD Internal').reduce((s,r)=>s+r.amount,0);
  const exStudFacRev = data.filter(r => r.cat === 'External Student / Faculty').reduce((s,r)=>s+r.amount,0);
  const indRev       = data.filter(r => r.cat === 'Industrial').reduce((s,r)=>s+r.amount,0);
  const rdRev        = data.filter(r => r.cat === 'R&D Institute').reduce((s,r)=>s+r.amount,0);

  charts['intextr'] = new Chart(document.getElementById('chartIntExtRevenue'), {
    type: 'bar',
    data: {
      labels: ['IITD Internal','Ext. Student/Faculty','Industrial','R&D Institute'],
      datasets: [{
        label: 'Revenue (₹)',
        data: [internalRev, exStudFacRev, indRev, rdRev],
        backgroundColor: [
          CAT_COLORS['IITD Internal'].bg,
          CAT_COLORS['External Student / Faculty'].bg,
          CAT_COLORS['Industrial'].bg,
          CAT_COLORS['R&D Institute'].bg,
        ],
        borderColor: [
          CAT_COLORS['IITD Internal'].border,
          CAT_COLORS['External Student / Faculty'].border,
          CAT_COLORS['Industrial'].border,
          CAT_COLORS['R&D Institute'].border,
        ],
        borderWidth: 2, borderRadius: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmtCur(ctx.raw) } } },
      scales: {
        x: { grid: { color: '#2a3245' } },
        y: { grid: { color: '#2a3245' }, ticks: { callback: v => '₹' + (v>=1e6?(v/1e6).toFixed(1)+'M':v>=1e3?(v/1e3).toFixed(0)+'K':v) } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   5. HORIZONTAL BAR – Top Facilities by Samples
══════════════════════════════════════════════════════════════ */
function buildTopFacilitiesSamples() {
  destroyChart('topfacs');
  const data = filtered();
  const byFac = aggregateBy(data, 'facility', 'samples');
  const top = topN(byFac, 15);

  const labels = top.map(e => e[0]);
  const vals = top.map(e => e[1]);

  const gradient = ['#2563eb','#1d4ed8','#1e40af','#1e3a8a','#0891b2','#0e7490','#06b6d4','#22d3ee'];
  const bgs = labels.map((_, i) => gradient[i % gradient.length] + 'cc');
  const bds = labels.map((_, i) => gradient[i % gradient.length]);

  charts['topfacs'] = new Chart(document.getElementById('chartTopFacilitiesSamples'), {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Samples', data: vals, backgroundColor: bgs, borderColor: bds, borderWidth: 2, borderRadius: 6 }] },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) + ' samples' } } },
      scales: {
        x: { grid: { color: '#2a3245' }, ticks: { callback: v => fmt(v) } },
        y: { grid: { color: '#2a3245' }, ticks: { font: { size: 11 } } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   6. HORIZONTAL BAR – Top Facilities by Revenue
══════════════════════════════════════════════════════════════ */
function buildTopFacilitiesRevenue() {
  destroyChart('topfacr');
  const data = filtered();
  const byFac = aggregateBy(data, 'facility', 'amount');
  const top = topN(byFac, 15);

  const labels = top.map(e => e[0]);
  const vals   = top.map(e => e[1]);

  const gradient = ['#059669','#047857','#065f46','#064e3b','#34d399','#6ee7b7','#10b981','#a7f3d0'];
  const bgs = labels.map((_, i) => gradient[i % gradient.length] + 'cc');
  const bds = labels.map((_, i) => gradient[i % gradient.length]);

  charts['topfacr'] = new Chart(document.getElementById('chartTopFacilitiesRevenue'), {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Revenue (₹)', data: vals, backgroundColor: bgs, borderColor: bds, borderWidth: 2, borderRadius: 6 }] },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmtCur(ctx.raw) } } },
      scales: {
        x: { grid: { color: '#2a3245' }, ticks: { callback: v => '₹'+(v>=1e6?(v/1e6).toFixed(1)+'M':v>=1e3?(v/1e3).toFixed(0)+'K':v) } },
        y: { grid: { color: '#2a3245' }, ticks: { font: { size: 11 } } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   7. GROUPED BAR – Slots Opened (Samples) vs Slots Booked (Appointments)
══════════════════════════════════════════════════════════════ */
function buildSlotsOpenedBooked() {
  destroyChart('slots');
  const data = filtered();

  // Aggregate by facility
  const facMap = {};
  data.forEach(r => {
    if (!facMap[r.facility]) facMap[r.facility] = { samples: 0, appts: 0 };
    facMap[r.facility].samples += r.samples;
    facMap[r.facility].appts  += r.appts;
  });

  const sorted = Object.entries(facMap)
    .sort((a, b) => b[1].samples - a[1].samples)
    .slice(0, 18);

  const labels   = sorted.map(e => e[0]);
  const opened   = sorted.map(e => e[1].samples);
  const booked   = sorted.map(e => e[1].appts);

  charts['slots'] = new Chart(document.getElementById('chartSlotsOpenedBooked'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Slots Opened (Samples)', data: opened, backgroundColor: 'rgba(37,99,235,0.7)',  borderColor: '#3b82f6', borderWidth: 2, borderRadius: 6 },
        { label: 'Slots Booked (Appts)',   data: booked,  backgroundColor: 'rgba(5,150,105,0.7)', borderColor: '#34d399', borderWidth: 2, borderRadius: 6 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#e6edf3', padding: 18 } },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        x: { grid: { color: '#2a3245' }, ticks: { font: { size: 10 }, maxRotation: 35 } },
        y: { grid: { color: '#2a3245' }, ticks: { callback: v => fmt(v) } }
      }
    }
  });
}


/* ══════════════════════════════════════════════════════════════
   10. GROUPED BAR – Revenue Internal vs External per Facility
══════════════════════════════════════════════════════════════ */
function buildRevenueFacilityGroup() {
  destroyChart('revfacgrp');
  const facilities = [...new Set(RAW.map(r => r.facility))];

  const internalRevMap = {};
  const externalRevMap = {};
  RAW.forEach(r => {
    if (r.cat === 'IITD Internal') {
      internalRevMap[r.facility] = (internalRevMap[r.facility] || 0) + r.amount;
    } else {
      externalRevMap[r.facility] = (externalRevMap[r.facility] || 0) + r.amount;
    }
  });

  // Sort by total revenue
  const sorted = facilities
    .map(f => ({ f, total: (internalRevMap[f]||0) + (externalRevMap[f]||0) }))
    .sort((a,b) => b.total - a.total)
    .slice(0, 16);

  const labels    = sorted.map(e => e.f);
  const intVals   = labels.map(f => internalRevMap[f] || 0);
  const extVals   = labels.map(f => externalRevMap[f] || 0);

  charts['revfacgrp'] = new Chart(document.getElementById('chartRevenueFacilityGroup'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Internal Revenue (₹)',  data: intVals, backgroundColor: 'rgba(37,99,235,0.7)',  borderColor:'#3b82f6', borderWidth:2, borderRadius:5 },
        { label: 'External Revenue (₹)',  data: extVals, backgroundColor: 'rgba(5,150,105,0.7)', borderColor:'#34d399', borderWidth:2, borderRadius:5 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#e6edf3', padding: 18 } },
        tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => ' ' + ctx.dataset.label + ': ' + fmtCur(ctx.raw) } }
      },
      scales: {
        x: { grid: { color: '#2a3245' }, ticks: { font: { size: 10 }, maxRotation: 35 } },
        y: { grid: { color: '#2a3245' }, ticks: { callback: v => '₹'+(v>=1e6?(v/1e6).toFixed(1)+'M':v>=1e3?(v/1e3).toFixed(0)+'K':v) } }
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   DATA TABLE
══════════════════════════════════════════════════════════════ */
function catClass(cat) {
  if (cat === 'IITD Internal')             return 'cat-internal';
  if (cat === 'External Student / Faculty') return 'cat-external';
  if (cat === 'Industrial')                 return 'cat-industrial';
  return 'cat-rd';
}

let tableData = RAW;
let currentPage = 1;
const itemsPerPage = 10;

function buildTable(data = tableData) {
  const tbody = document.getElementById('tableBody');
  const paginationContainer = document.getElementById('pagination');
  
  tbody.innerHTML = '';
  
  // Apply category filter if not 'all'
  let d = activeFilter === 'all' ? data : data.filter(r => r.cat === activeFilter);
  
  // Total rows count
  document.getElementById('rowCount').textContent = d.length + ' rows';

  // Pagination slicing
  const totalPages = Math.ceil(d.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = d.slice(start, end);

  pageData.forEach((r, i) => {
    const tableIndex = start + i + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tableIndex}</td>
      <td><strong>${r.facility}</strong></td>
      <td><span class="cat-badge ${catClass(r.cat)}">${r.cat}</span></td>
      <td>${fmt(r.samples)}</td>
      <td>${fmt(r.appts)}</td>
      <td>${fmtCur(r.amount)}</td>
    `;
    tbody.appendChild(tr);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const container = document.getElementById('pagination');
  container.innerHTML = '';

  if (totalPages <= 1) return;

  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'pg-btn';
  prevBtn.innerHTML = '←';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => { currentPage--; buildTable(); };
  container.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    // Show first, last, current, and pages around current
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      const btn = document.createElement('button');
      btn.className = `pg-btn ${i === currentPage ? 'active' : ''}`;
      btn.textContent = i;
      btn.onclick = () => { currentPage = i; buildTable(); };
      container.appendChild(btn);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement('span');
      dots.className = 'pg-dots';
      dots.textContent = '...';
      container.appendChild(dots);
    }
  }

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'pg-btn';
  nextBtn.innerHTML = '→';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => { currentPage++; buildTable(); };
  container.appendChild(nextBtn);
}


/* Table search */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('tableSearch').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    tableData = RAW.filter(r =>
      r.facility.toLowerCase().includes(q) ||
      r.cat.toLowerCase().includes(q)
    );
    currentPage = 1;
    buildTable();
  });
});

/* ══════════════════════════════════════════════════════════════
   FILTER BUTTONS
══════════════════════════════════════════════════════════════ */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      currentPage = 1; // Reset to page 1 on filter
      buildAllCharts();
      buildTable();
      updateKPIs();
      
      // Update download title
      const downloadBtn = document.querySelector('.download-rpt-btn');
      if (downloadBtn) {
        if (activeFilter === 'all') {
          downloadBtn.title = 'Download Annual Report PDF';
        } else {
          downloadBtn.title = `Download ${activeFilter} Report PDF`;
        }
      }
    });
  });

  // Setup download button PDF generation
  const downloadBtn = document.querySelector('.download-rpt-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      generatePDFReport();
    });
  }
}

function generatePDFReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Report Title
  doc.setFontSize(16);
  const title = activeFilter === 'all' 
    ? 'CRF Facility Usage Report (All Users)' 
    : `CRF Facility Usage Report (${activeFilter})`;
  doc.text(title, 14, 20);

  // Table Data
  const currentData = filtered();
  const tableDataArr = currentData.map((r, index) => [
    index + 1,
    r.facility,
    r.cat,
    r.samples.toLocaleString('en-IN'),
    r.appts.toLocaleString('en-IN'),
    '' + r.amount.toLocaleString('en-IN')
  ]);

  doc.autoTable({
    startY: 30,
    head: [['#', 'Facility', 'User Category', 'Samples', 'Appointments', 'Amount']],
    body: tableDataArr,
    theme: 'grid',
    headStyles: { fillColor: [37, 99, 235] },
    styles: { fontSize: 9 }
  });

  // KPI Summary Text
  const totalSamples = currentData.reduce((s, r) => s + r.samples, 0);
  const totalAppts = currentData.reduce((s, r) => s + r.appts, 0);
  const totalRevenue = currentData.reduce((s, r) => s + r.amount, 0);
  const finalY = doc.lastAutoTable.finalY || 30;
  
  doc.setFontSize(12);
  doc.text('Summary:', 14, finalY + 10);
  doc.setFontSize(10);
  doc.text(`Total Samples: ${totalSamples.toLocaleString('en-IN')}`, 14, finalY + 18);
  doc.text(`Total Appointments: ${totalAppts.toLocaleString('en-IN')}`, 14, finalY + 24);
  doc.text(`Total Revenue: Rs. ${totalRevenue.toLocaleString('en-IN')}`, 14, finalY + 30);

  // Save the PDF
  const filename = activeFilter === 'all' 
    ? 'CRF_Report_All_Users.pdf' 
    : `CRF_Report_${activeFilter.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
  
  doc.save(filename);
}

/* ══════════════════════════════════════════════════════════════
   BUILD ALL CHARTS
══════════════════════════════════════════════════════════════ */
function buildAllCharts() {
  buildPieChart();
  buildRevenueCatChart();
  buildIntExtSamples();
  buildIntExtRevenue();
  buildTopFacilitiesSamples();
  buildTopFacilitiesRevenue();
  buildSlotsOpenedBooked();
  buildRevenueFacilityGroup();
}

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  updateKPIs();
  buildAllCharts();
  buildTable();
});
