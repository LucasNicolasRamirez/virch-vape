import prod3 from '../assets/imagenes/prod3.png';

export const productosData = [
  // Líquidos
  { id: 1, nombre: 'Drag X', marca: 'Voopoo', tamano:"100ml", nicotina:"3mg", precio: 120000, descripcion: 'Lemon pie, Merengue y una masa crujiente dando un sabor único y el balance perfecto entre lo cítrico y lo dulce.', imagen: prod3, stock: 10, categoriaId: 'liquidos' },
  { id: 2, nombre: 'Kodama', marca: 'Evas',tamano:"30ml", nicotina:"3mg", precio: 21450, descripcion: 'Lemon pie, Merengue y una masa crujiente dando un sabor único y el balance perfecto entre lo cítrico y lo dulce.', imagen: prod3, stock: 10, categoriaId: 'liquidos' },
  { id: 3, nombre: 'Líquido VaperOne', marca: 'VaperOne', tamano:"100ml", nicotina:"0mg", precio: 9500, descripcion: 'Sabor frutal con mezcla de fresa y mora, ideal para una experiencia suave y refrescante.', imagen: prod3, stock: 8, categoriaId: 'liquidos' },
  { id: 4, nombre: 'Frosty Lemon', marca: 'Frosty', tamano:"60ml", nicotina:"6mg", precio: 12500, descripcion: 'Limonada fresca con un toque de menta, refrescante y sabroso para cualquier ocasión.', imagen: prod3, stock: 3, categoriaId: 'liquidos' },
  { id: 5, nombre: 'Navy Mint', marca: 'Navy', tamano:"100ml", nicotina:"0mg", precio: 10500, descripcion: 'Menta suave con un toque de mentol, ideal para quienes disfrutan de sabores frescos.', imagen: prod3, stock: 15, categoriaId: 'liquidos' },
  { id: 6, nombre: 'Mango Blast', marca: 'TropicalVape', tamano:"120ml", nicotina:"6mg", precio: 13000, descripcion: 'Mezcla de mango y cítricos, ofreciendo una explosión de sabor tropical.', imagen: prod3, stock: 7, categoriaId: 'liquidos' },

  // Sales
  { id: 7, nombre: 'Salt Nic Lemon', marca: 'Vape Salt',  tamano:"30ml", nicotina:"12mg", precio: 7800, descripcion: 'Sales de nicotina con sabor a limón fresco y ácido.', imagen: prod3, stock: 10, categoriaId: 'sales' },
  { id: 8, nombre: 'Cool Mint Salt', marca: 'Frosty',  tamano:"60ml", nicotina:"25mg", precio: 8500, descripcion: 'Combinación de menta y sales de nicotina, con un toque fresco y suave.', imagen: prod3, stock: 4, categoriaId: 'sales' },
  { id: 9, nombre: 'Nicotine Salt - Red Fruits', marca: 'Vape Salt',  tamano:"30ml", nicotina:"35mg", precio: 7800, descripcion: 'Una mezcla de frutas rojas con sales de nicotina para una experiencia dulce y fuerte.', imagen: prod3, stock: 12, categoriaId: 'sales' },
  { id: 10, nombre: 'Tobacco Salt', marca: 'ClassicVape',  tamano:"60ml", nicotina:"12mg", precio: 7000, descripcion: 'Sabor de tabaco clásico con un toque de sales de nicotina, ideal para los amantes del tabaco.', imagen: prod3, stock: 5, categoriaId: 'sales' },
  { id: 11, nombre: 'Fruity Blast Salt', marca: 'Vape Salt',  tamano:"30ml", nicotina:"25mg", precio: 8200, descripcion: 'Mezcla de frutas tropicales con un toque dulce de sales de nicotina.', imagen: prod3, stock: 8, categoriaId: 'sales' },
  { id: 12, nombre: 'Mango Ice Salt', marca: 'Tropical Salt',  tamano:"60ml", nicotina:"35mg", precio: 8500, descripcion: 'Mango fresco con un toque de hielo, ideal para los días calurosos.', imagen: prod3, stock: 6, categoriaId: 'sales' },

  // Pods Descartables
  { id: 13, nombre: 'VapePod Mango', marca: 'TropicalVape', precio: 11000, descripcion: 'Vape pod desechable con sabor mango tropical, fresco y delicioso.', imagen: prod3, stock: 6, categoriaId: 'pods-descartables' },
  { id: 14, nombre: 'VapePod Iceberry', marca: 'Vape Pods', precio: 11500, descripcion: 'Combinación de frutos rojos y hielo, perfecto para disfrutar de un sabor fresco y afrutado.', imagen: prod3, stock: 9, categoriaId: 'pods-descartables' },
  { id: 15, nombre: 'VapePod Mint', marca: 'Vape Pods', precio: 10500, descripcion: 'Menta fresca con un toque de hielo, ofreciendo una experiencia refrescante y duradera.', imagen: prod3, stock: 12, categoriaId: 'pods-descartables' },
  { id: 16, nombre: 'VapePod Piña', marca: 'Vape Pods', precio: 9000, descripcion: 'Sabor dulce de piña, perfecto para los amantes de los sabores tropicales.', imagen: prod3, stock: 7, categoriaId: 'pods-descartables' },
  { id: 17, nombre: 'VapePod Strawberry', marca: 'Vape Pods', precio: 9500, descripcion: 'Fresas dulces con un toque cremoso, creando una mezcla de sabores suaves.', imagen: prod3, stock: 5, categoriaId: 'pods-descartables' },
  { id: 18, nombre: 'VapePod Watermelon', marca: 'Vape Pods', precio: 9800, descripcion: 'Refrescante sabor a sandía, ideal para los días de calor.', imagen: prod3, stock: 8, categoriaId: 'pods-descartables' },

  // Pods Recargables
  { id: 19, nombre: 'Pod Recargable Citrus', marca: 'CitrusVape', precio: 16000, descripcion: 'Cítricos refrescantes en un pod recargable, ideal para disfrutar de un sabor ácido y dulce.', imagen: prod3, stock: 6, categoriaId: 'pods-recargables' },
  { id: 20, nombre: 'Pod Recargable Berry Blast', marca: 'BerryVape', precio: 15000, descripcion: 'Mezcla de frutos rojos y moras en un pod recargable, perfecto para los sabores dulces.', imagen: prod3, stock: 4, categoriaId: 'pods-recargables' },
  { id: 21, nombre: 'Pod Recargable Fresh Mint', marca: 'MintVape', precio: 14000, descripcion: 'Menta fresca y suave en un pod recargable, ideal para quienes disfrutan de un vapeo frío y refrescante.', imagen: prod3, stock: 10, categoriaId: 'pods-recargables' },
  { id: 22, nombre: 'Pod Recargable Grape', marca: 'Vape Pods', precio: 14500, descripcion: 'Sabor a uva dulce con un toque refrescante, perfecto para un vapeo duradero.', imagen: prod3, stock: 8, categoriaId: 'pods-recargables' },
  { id: 23, nombre: 'Pod Recargable Tropical', marca: 'Tropical Pods', precio: 15000, descripcion: 'Mezcla tropical de frutas en un pod recargable, para un sabor dulce y exótico.', imagen: prod3, stock: 9, categoriaId: 'pods-recargables' },
  { id: 24, nombre: 'Pod Recargable Menthol', marca: 'Mint Pods', precio: 16000, descripcion: 'Menta intensa con un toque de mentol, ideal para quienes buscan un vapeo refrescante.', imagen: prod3, stock: 7, categoriaId: 'pods-recargables' },

  // Kits de Inicio
  { id: 25, nombre: 'Kit de Inicio Básico', marca: 'Vape Starter', precio: 35000, descripcion: 'Kit de inicio ideal para quienes buscan comenzar con un vapeo sencillo y económico.', imagen: prod3, stock: 10, categoriaId: 'kits-de-inicio' },
  { id: 26, nombre: 'Kit Starter Plus', marca: 'Vape Plus', precio: 40000, descripcion: 'Kit de inicio con características avanzadas para una experiencia de vapeo superior.', imagen: prod3, stock: 0, categoriaId: 'kits-de-inicio' },
  { id: 27, nombre: 'Kit Vaper One', marca: 'Vape One', precio: 45000, descripcion: 'Kit completo con todo lo necesario para comenzar a vapear de forma segura y eficiente.', imagen: prod3, stock: 7, categoriaId: 'kits-de-inicio' },
  { id: 28, nombre: 'Kit Básico Mango', marca: 'Vape Mango', precio: 36000, descripcion: 'Kit de inicio con sabor a mango, ideal para iniciarse en el vapeo con un toque tropical.', imagen: prod3, stock: 9, categoriaId: 'kits-de-inicio' },
  { id: 29, nombre: 'Kit Vaper X', marca: 'Vape X', precio: 47000, descripcion: 'Kit avanzado de inicio, perfecto para quienes quieren un vapeo potente y duradero.', imagen: prod3, stock: 0, categoriaId: 'kits-de-inicio' },
  { id: 30, nombre: 'Kit Compacto', marca: 'VapeCompact', precio: 32000, descripcion: 'Kit pequeño y discreto, ideal para un vapeo cómodo y sencillo.', imagen: prod3, stock: 8, categoriaId: 'kits-de-inicio' },

  // Kits Avanzados
  { id: 31, nombre: 'Kit Avanzado Pro', marca: 'Vape Pro', precio: 85000, descripcion: 'Kit avanzado para vapers experimentados que buscan potencia y personalización.', imagen: prod3, stock: 5, categoriaId: 'kits-avanzados' },
  { id: 32, nombre: 'Kit Avanzado X', marca: 'VapeX', precio: 92000, descripcion: 'Un kit completo con mod, atomizador y baterías de alta calidad, ideal para el vaper experto.', imagen: prod3, stock: 0, categoriaId: 'kits-avanzados' },
  { id: 33, nombre: 'Kit Sub-Ohm', marca: 'SubVape', precio: 98000, descripcion: 'Kit sub-ohm para una experiencia de vapeo potente y de gran sabor.', imagen: prod3, stock: 7, categoriaId: 'kits-avanzados' },
  { id: 34, nombre: 'Kit Premium', marca: 'Vape Premium', precio: 100000, descripcion: 'Kit premium para vapers que buscan una experiencia única y personalizada.', imagen: prod3, stock: 4, categoriaId: 'kits-avanzados' },
  { id: 35, nombre: 'Kit VaperKing', marca: 'VaperKing', precio: 120000, descripcion: 'Kit avanzado con mod de alto rendimiento y atomizador de última generación.', imagen: prod3, stock: 6, categoriaId: 'kits-avanzados' },
  { id: 36, nombre: 'Kit Master Vape', marca: 'MasterVape', precio: 115000, descripcion: 'El kit definitivo para quienes quieren experimentar el vapeo al máximo nivel.', imagen: prod3, stock: 0, categoriaId: 'kits-avanzados' },

  // Mods
  { id: 37, nombre: 'Mod RX 200', marca: 'Wismec', precio: 35000, descripcion: 'Mod de 200W con pantalla táctil y diseño ergonómico.', imagen: prod3, stock: 6, categoriaId: 'mods' },
  { id: 38, nombre: 'Mod Vaporesso Luxe', marca: 'Vaporesso', precio: 42000, descripcion: 'Mod de 220W con pantalla a color y tecnología avanzada.', imagen: prod3, stock: 0, categoriaId: 'mods' },
  { id: 39, nombre: 'Mod Lost Vape', marca: 'Lost Vape', precio: 45000, descripcion: 'Mod de alta gama con chipset avanzado y diseño de lujo.', imagen: prod3, stock: 8, categoriaId: 'mods' },
  { id: 40, nombre: 'Mod Aegis Legend', marca: 'GeekVape', precio: 47000, descripcion: 'Mod robusto de 200W con resistencia al agua y golpes.', imagen: prod3, stock: 5, categoriaId: 'mods' },
  { id: 41, nombre: 'Mod Tesla Invader', marca: 'Tesla', precio: 38000, descripcion: 'Mod de alto voltaje con diseño minimalista y rendimiento excepcional.', imagen: prod3, stock: 7, categoriaId: 'mods' },
  { id: 42, nombre: 'Mod Smok Alien', marca: 'Smok', precio: 46000, descripcion: 'Mod de 220W con diseño innovador y potencia para grandes nubes de vapor.', imagen: prod3, stock: 0, categoriaId: 'mods' },

  // Atomizadores
  { id: 43, nombre: 'Atomizador RTA', marca: 'VapeCraft', precio: 25000, descripcion: 'Atomizador reparable RTA con excelente rendimiento y gran capacidad de e-líquido.', imagen: prod3, stock: 8, categoriaId: 'atomizadores' },
  { id: 44, nombre: 'Atomizador RDA', marca: 'VapeDrip', precio: 23000, descripcion: 'Atomizador RDA para driping con buena producción de vapor y sabor.', imagen: prod3, stock: 7, categoriaId: 'atomizadores' },
  { id: 45, nombre: 'Atomizador Sub-Ohm', marca: 'VapeTank', precio: 28000, descripcion: 'Atomizador sub-ohm con gran capacidad y excelente flujo de aire.', imagen: prod3, stock: 0, categoriaId: 'atomizadores' },
  { id: 46, nombre: 'Atomizador Tank Pro', marca: 'VapePro', precio: 32000, descripcion: 'Atomizador de tanque con sistema de relleno fácil y gran producción de vapor.', imagen: prod3, stock: 0, categoriaId: 'atomizadores' },
  { id: 47, nombre: 'Atomizador Mesh', marca: 'MeshVape', precio: 30000, descripcion: 'Atomizador mesh para una experiencia de vapeo mejorada con gran sabor y nubes densas.', imagen: prod3, stock: 10, categoriaId: 'atomizadores' },
  { id: 48, nombre: 'Atomizador RTA V2', marca: 'CraftVape', precio: 35000, descripcion: 'Atomizador RTA con diseño mejorado para una experiencia personalizada de vapeo.', imagen: prod3, stock: 9, categoriaId: 'atomizadores' },

  // Baterías
  { id: 49, nombre: 'Batería 18650', marca: 'Vape Battery', precio: 2500, descripcion: 'Batería recargable de alta calidad para dispositivos de vapeo.', imagen: prod3, stock: 0, categoriaId: 'baterias' },
  { id: 50, nombre: 'Batería 21700', marca: 'Vape Power', precio: 3500, descripcion: 'Batería de alto voltaje 21700 para mods de alta potencia.', imagen: prod3, stock: 0, categoriaId: 'baterias' },
  { id: 51, nombre: 'Batería 20700', marca: 'Vape Energy', precio: 3000, descripcion: 'Batería 20700 para mayor duración y potencia en dispositivos de vapeo.', imagen: prod3, stock: 12, categoriaId: 'baterias' },
  { id: 52, nombre: 'Batería 18350', marca: 'VapeX', precio: 2200, descripcion: 'Batería compacta para dispositivos de vapeo pequeños.', imagen: prod3, stock: 15, categoriaId: 'baterias' },
  { id: 53, nombre: 'Batería VaperX', marca: 'Vape Power', precio: 2600, descripcion: 'Batería de alta descarga para mods de gran potencia.', imagen: prod3, stock: 18, categoriaId: 'baterias' },
  { id: 54, nombre: 'Batería Samsung 30Q', marca: 'Samsung', precio: 2700, descripcion: 'Batería 18650 de alta calidad para mod y dispositivos de vapeo.', imagen: prod3, stock: 25, categoriaId: 'baterias' },

  // Cargadores
  { id: 55, nombre: 'Cargador Doble', marca: 'VapeCharge', precio: 5000, descripcion: 'Cargador para baterías 18650, permite cargar dos baterías a la vez.', imagen: prod3, stock: 15, categoriaId: 'cargadores' },
  { id: 56, nombre: 'Cargador Universal', marca: 'VapeCharge', precio: 6500, descripcion: 'Cargador universal para baterías 18650, 20700 y 21700.', imagen: prod3, stock: 8, categoriaId: 'cargadores' },
  { id: 57, nombre: 'Cargador Inteligente', marca: 'SmartCharge', precio: 7000, descripcion: 'Cargador inteligente con pantalla LCD que indica el estado de carga.', imagen: prod3, stock: 0, categoriaId: 'cargadores' },
  { id: 58, nombre: 'Cargador Xtar', marca: 'Xtar', precio: 7500, descripcion: 'Cargador avanzado de baterías con tecnología de carga rápida.', imagen: prod3, stock: 0, categoriaId: 'cargadores' },
  { id: 59, nombre: 'Cargador Efest', marca: 'Efest', precio: 6000, descripcion: 'Cargador dual Efest con compatibilidad para diferentes tamaños de baterías.', imagen: prod3, stock: 7, categoriaId: 'cargadores' },
  { id: 60, nombre: 'Cargador Nitecore', marca: 'Nitecore', precio: 8000, descripcion: 'Cargador de baterías Nitecore para una carga rápida y eficiente.', imagen: prod3, stock: 9, categoriaId: 'cargadores' },

  // Consumibles
  { id: 61, nombre: 'Algodón Vape', marca: 'CottonVape', precio: 1500, descripcion: 'Algodón de alta calidad para el proceso de wicking en vapes.', imagen: prod3, stock: 0, categoriaId: 'repuestos' },
  { id: 62, nombre: 'Hilo Kanthal', marca: 'Vape Wire', precio: 1800, descripcion: 'Hilo de Kanthal de alta resistencia para la fabricación de coils.', imagen: prod3, stock: 12, categoriaId: 'repuestos' },
  { id: 63, nombre: 'Hilo Nichrome', marca: 'Vape Wire', precio: 2000, descripcion: 'Hilo de Nichrome para coils que permite un calentamiento rápido y duradero.', imagen: prod3, stock: 8, categoriaId: 'repuestos' },
  { id: 64, nombre: 'Funda para Batería', marca: 'BatteryCase', precio: 1200, descripcion: 'Funda protectora para baterías de vapeo, ideal para evitar cortocircuitos.', imagen: prod3, stock: 15, categoriaId: 'repuestos' },
  { id: 65, nombre: 'Papel de Algodón', marca: 'Cotton', precio: 1300, descripcion: 'Papel de algodón puro para reemplazo en el proceso de vaporización.', imagen: prod3, stock: 18, categoriaId: 'repuestos' },
  { id: 66, nombre: 'Jugo de Glicerina', marca: 'VG Base', precio: 3500, descripcion: 'Base de glicerina vegetal de alta calidad para mezclar con sabores.', imagen: prod3, stock: 0, categoriaId: 'repuestos' },

  // Accesorios
  { id: 67, nombre: 'Pinzas Vape', marca: 'Vape Tool', precio: 1500, descripcion: 'Pinzas de precisión para un fácil manejo de coils y algodón.', imagen: prod3, stock: 25, categoriaId: 'accesorios' },
  { id: 68, nombre: 'Herramientas de Vapeo', marca: 'Vape Tool', precio: 2500, descripcion: 'Kit de herramientas completas para un mantenimiento adecuado de tu equipo.', imagen: prod3, stock: 0, categoriaId: 'accesorios' },
  { id: 69, nombre: 'Adaptador 510', marca: 'Vape Adapter', precio: 1200, descripcion: 'Adaptador 510 para mod de 510 hilos.', imagen: prod3, stock: 15, categoriaId: 'accesorios' },
  { id: 70, nombre: 'Líquido Limpiador', marca: 'CleanVape', precio: 1300, descripcion: 'Líquido limpiador de alta calidad para mantener el atomizador en perfectas condiciones.', imagen: prod3, stock: 12, categoriaId: 'accesorios' },
  { id: 71, nombre: 'Base de Vaporización', marca: 'VapeBase', precio: 1000, descripcion: 'Base de vaporización para mejorar la producción de vapor y el sabor.', imagen: prod3, stock: 0, categoriaId: 'accesorios' },
  { id: 72, nombre: 'Cable de Carga', marca: 'Vape Charge', precio: 800, descripcion: 'Cable de carga resistente y duradero para vapers.', imagen: prod3, stock: 20, categoriaId: 'accesorios' },

  
  // Otros
  { id: 73, nombre: 'Batería 18650', marca: 'Vape Battery', precio: 2500, descripcion: 'Batería recargable de alta calidad para dispositivos de vapeo.', imagen: prod3, stock: 20, categoriaId: 'otros' },
  { id: 74, nombre: 'Cargador Doble', marca: 'VapeCharge', precio: 5000, descripcion: 'Cargador para baterías 18650, permite cargar dos baterías a la vez.', imagen: prod3, stock: 0, categoriaId: 'otros' },
  { id: 75, nombre: 'Limpieza para Vapes', marca: 'VapeClean', precio: 2000, descripcion: 'Kit de limpieza para mantener tu dispositivo de vapeo en óptimas condiciones.', imagen: prod3, stock: 25, categoriaId: 'otros' },
  { id: 76, nombre: 'Tinta para Mod', marca: 'Vape Ink', precio: 3500, descripcion: 'Tinta para personalizar tu mod con diferentes colores y diseños.', imagen: prod3, stock: 10, categoriaId: 'otros' },
  { id: 77, nombre: 'Estuche de Vapeo', marca: 'VapeCase', precio: 4500, descripcion: 'Estuche protector para tu vape y accesorios, ideal para transporte seguro.', imagen: prod3, stock: 0, categoriaId: 'otros' },
  { id: 78, nombre: 'Papel para Atomizadores', marca: 'Vape Paper', precio: 1500, descripcion: 'Papel especializado para limpieza de atomizadores y otros dispositivos.', imagen: prod3, stock: 30, categoriaId: 'otros' }
];
