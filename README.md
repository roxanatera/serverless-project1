# Serverless Burger API

Este proyecto es una API Serverless construida con AWS Lambda, API Gateway y Node.js, utilizando el framework Serverless. La API permite crear y recuperar pedidos de hamburguesas.

## Estructura del Proyecto

- `handler.js`: Contiene la lógica de las funciones Lambda.
- `serverless.yml`: Archivo de configuración para Serverless Framework.
- `img/`: Carpeta que contiene capturas de pantalla de las pruebas.
- `README.md`: Este archivo, con la documentación del proyecto.

## Endpoints

### 1. Crear un nuevo pedido (POST)

- **URL**: `/order`
- **Método**: `POST`
- **Body** (JSON):
  ```json
  {
    "pedidoId": "001",
    "tipoBurger": "Doble Carne",
    "toppings": ["queso cheddar", "tocino"],
    "acompañamiento": "papas fritas"
  }
## Respuesta:
 ```json
{
  "message": {
    "orderId": "abc123",
    "pedidoId": "001",
    "tipoBurger": "Doble Carne",
    "toppings": ["queso cheddar", "tocino"],
    "acompañamiento": "papas fritas"
  }
}
```
## Prueba del endpoint POST:
https://github.com/roxanatera/serverless-project1/blob/main/img/post_1.png


## 2. Obtener un pedido por ID (GET)

- **URL**: `/order/{orderId}`
- **Método**: `GET`
- **Respuesta**:
  ```json
  {
    "orderId": "abc123",
    "pedidoId": "001",
    "tipoBurger": "Doble Carne",
    "toppings": ["queso cheddar", "tocino"],
    "acompañamiento": "papas fritas",
    "estado": "En preparación"
  }
`
## Prueba del endpoint GET:
https://raw.githubusercontent.com/roxanatera/serverless-project1/refs/heads/main/img/get_2.PNG