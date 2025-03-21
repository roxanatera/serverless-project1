## Serverless Project: API en AWS Lambda

Proyecto de ejemplo para desplegar una función Lambda en AWS usando Serverless Framework (Node.js 22.x).

---

## Requisitos
- **Node.js v18+**
- **Serverless Framework v4+**
- Cuenta en [Serverless Dashboard](https://app.serverless.com) (gratuita para proyectos personales)
- AWS CLI configurado (`aws configure`)

---

## Instalación
```bash
# Clona el repositorio
git clone [URL_DEL_REPOSITORIO]
cd serverless-project1

# Instala Serverless Framework globalmente
npm install -g serverless


├── handler.js          # Código de la función Lambda
├── serverless.yml      # Configuración de despliegue
└── README.md