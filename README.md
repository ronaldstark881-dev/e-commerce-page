Guía de Comandos Básicos de Git

Este archivo contiene los comandos fundamentales de Git, su definición y un ejemplo de uso para ayudarte en tu flujo de trabajo diario.

 Lista de Comandos

 Comando  Definición breve  Ejemplo de uso 

 `git --version`  Muestra la versión instalada de Git  `git --version` |
 `git init`  Inicializa un repositorio en la carpeta actual  `git init` |
 `git add`  Agrega cambios al área de preparación (staging)  `git add .` (agrega todos los archivos) 
 `git commit`  Registra los cambios con un mensaje descriptivo  `git commit -m "Primer commit"` 
 `git status`  Muestra el estado del repositorio | `git status` 



 Flujo de trabajo típico

Para registrar tus cambios de manera efectiva, sigue este flujo estándar:

1. Preparar archivos: `git add .`
2. Confirmar cambios: `git commit -m "mensaje"`
3. Verificar estado: `git status`
