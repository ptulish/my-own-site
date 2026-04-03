import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes' // Твои схемы

export default defineConfig({
    name: 'default',
    title: 'My Portfolio Admin', // Название твоей админки

    projectId: 'benrexjk', // Твой ID проекта (взял из твоих файлов)
    dataset: 'production',
    basePath: '/admin', // Важно! Это путь, по которому будет жить админка в React

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
