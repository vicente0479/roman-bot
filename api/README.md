# 🏛️ Conversor de Números Romanos ↔ Enteros

Proyecto desarrollado en **Node.js + Express**, que permite convertir números **romanos a enteros** y **enteros a romanos**, de forma automática según el tipo de valor recibido.

Este proyecto fue ampliado para incluir **la conversión inversa** (enteros → romanos), cumpliendo con los requerimientos solicitados.

---

## 🚀 Funcionalidades principales

- 🔁 Conversión **Romano → Entero**  
  Ejemplo: `XIV` → `14`

- 🔁 Conversión **Entero → Romano**  
  Ejemplo: `2025` → `MMXXV`

- ✅ Validación de errores y manejo de entradas incorrectas.

---

## 🧩 Estructura del proyecto

PROYECTODESPLIEGUE/
├── api/
│ └── index.js # Servidor Express y endpoint principal
├── .github/
│ └── workflows/
│ └── deploy.yml # CI/CD con GitHub Actions + Vercel
├── romanConverter.js # Funciones de conversión
├── romanConverter.test.js# Tests con Jest
├── vercel.json # Configuración de despliegue en Vercel
├── package.json
├── package-lock.json
└── README.md

yaml
Copiar código

---

## ⚙️ Endpoint principal

### `GET /convert?value=<valor>`

Recibe un valor (número romano o entero) y devuelve su conversión correspondiente.

### 🔹 Ejemplo 1 — Romano → Entero
GET /convert?value=XIV

css
Copiar código
**Respuesta:**
```json
{
  "input": "XIV",
  "integer": 14,
  "message": "El número romano XIV equivale al entero 14"
}
🔹 Ejemplo 2 — Entero → Romano
sql
Copiar código
GET /convert?value=2025
Respuesta:

json
Copiar código
{
  "input": 2025,
  "roman": "MMXXV",
  "message": "El número 2025 en romano es MMXXV"
}
🧠 Lógica de conversión
📜 romanToInt(roman)
Convierte un número romano (como XIV) en un entero (14).

🔢 intToRoman(num)
Convierte un entero (2025) a su representación romana (MMXXV).

Ambas funciones están implementadas en romanConverter.js.

🧪 Tests
El proyecto incluye pruebas automatizadas con Jest.

Para ejecutarlas:

bash
Copiar código
npm install
npm test
Ejemplo de test:

js
Copiar código
test('Convierte entero a romano correctamente', () => {
  expect(intToRoman(2025)).toBe('MMXXV');
});
🧰 Ejecución local
Para iniciar el servidor localmente:

bash
Copiar código
npm install
node api/index.js
Por defecto se ejecuta en http://localhost:3000

☁️ Despliegue automático
Este proyecto está configurado con GitHub Actions y Vercel.

Cada vez que se realiza un commit o push a la rama main:

Se ejecutan los tests automatizados.

Si todo pasa correctamente, se despliega automáticamente en Vercel.

Configuraciones relevantes:

.github/workflows/deploy.yml → define el flujo CI/CD.

vercel.json → indica el punto de entrada del proyecto (api/index.js).

🧑‍💻 Autor
Nombre: [Vicente Ybalo]
Profesor: [Cristian Diguardia]
Materia: [Despliegue]
Año: 2025