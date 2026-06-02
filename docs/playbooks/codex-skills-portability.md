# Codex Skills Portability

## Objetivo

Documentar como llevar y reutilizar skills entre proyectos y computadores sin mezclar documentacion del proyecto con skills globales de Codex.

## Dos tipos de skills

### Skills aprendidas del proyecto

Viven dentro del repositorio:

```text
docs/codex-skills/
```

Sirven como bitacora reutilizable de aprendizaje por etapa. Viajan con GitHub cuando se sube el proyecto.

### Skills globales de Codex

Viven en el perfil de Codex del equipo:

```text
C:\Users\test\.codex\skills\
```

Estas pueden activarse en otros proyectos del mismo computador si tienen un `SKILL.md` valido.

## Como llevar skills a otro computador

1. Subir el proyecto a GitHub.
2. Clonar el repositorio en el otro computador.
3. Copiar skills globales personalizadas desde:

```text
C:\Users\test\.codex\skills\
```

4. Pegarlas en la carpeta equivalente del otro equipo:

```text
C:\Users\<usuario>\.codex\skills\
```

5. No copiar `.system`; esas skills pertenecen al entorno de Codex.
6. Abrir una nueva sesion de Codex para que detecte las skills.

## Como promover una skill del proyecto a skill global

1. Revisar la skill en `docs/codex-skills/`.
2. Eliminar detalles demasiado especificos del proyecto.
3. Crear una carpeta nueva en `C:\Users\test\.codex\skills\`.
4. Crear `SKILL.md` con frontmatter valido:

```yaml
---
name: nombre-de-la-skill
description: Describe que hace y cuando debe usarse.
---
```

5. Mantener el cuerpo conciso y operativo.
6. Validar que no incluya secretos, rutas absolutas innecesarias ni supuestos de un proyecto concreto.

## Como reutilizar skills de otros proyectos

1. Buscar documentacion tipo `docs/codex-skills/` en otros repositorios.
2. Leer antes de copiar.
3. Clasificar:
   - especifica del proyecto original;
   - reusable con ajustes;
   - candidata a skill global.
4. Promover solo las candidatas reutilizables.
5. Documentar de donde vino la skill y que se adapto.

## Errores comunes

- Copiar skills con rutas absolutas del proyecto anterior.
- Copiar secretos o nombres internos sensibles.
- Convertir una nota de aprendizaje en skill global sin limpiarla.
- Crear skills globales demasiado largas.
- Duplicar instrucciones que Codex ya sabe.

## Checklist

- [ ] La skill no contiene secretos.
- [ ] La skill no depende de rutas locales innecesarias.
- [ ] La skill explica claramente cuando debe usarse.
- [ ] La skill tiene `SKILL.md`.
- [ ] La skill es reusable fuera del proyecto original.
- [ ] La skill no duplica documentacion extensa que deberia quedar como referencia.
