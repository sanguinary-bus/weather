# AGENTS.md

This file contains development guidelines and commands for agentic coding assistants working in this Vue 3 + TypeScript weather application.

## Build/Lint/Test Commands

### Development Commands

- **Dev server**: `npm run dev` - Starts Vite development server on port 3000
- **Build**: `npm run build` - Production build (runs type-check + build-only)
- **Build only**: `npm run build-only` - Build without type checking
- **Preview**: `npm run preview` - Preview production build locally
- **Type check**: `npm run type-check` - Run Vue TypeScript compiler checks

### Lint Commands

- **Lint all**: `npm run lint` - Runs both oxlint and eslint with auto-fix
- **Oxlint only**: `npm run lint:oxlint` - Fast Rust-based linter with auto-fix
- **ESLint only**: `npm run lint:eslint` - Full ESLint with auto-fix and caching

### Testing

- **No test framework configured** - This project currently lacks unit/integration tests
- For single file testing, consider adding Vitest: `npm install -D vitest @vue/test-utils`
- Potential test command pattern: `npm test path/to/file.test.ts`

## Code Style Guidelines

### Import Sorting

- Uses `eslint-plugin-simple-import-sort` for automatic alphabetical import ordering
- Imports are sorted: Vue ecosystem → third-party → relative imports
- Side-effect imports (`import './style.css'`) come last

### Formatting

- **Prettier config**: No semicolons, single quotes, 80 char line width
- **Indentation**: 2 spaces (configured in .editorconfig)
- **Line endings**: LF, trim trailing whitespace, insert final newline

### TypeScript Configuration

- **Strict mode enabled** with additional safety checks
- **Path aliases**: `@/*` maps to `./src/*`
- **Unused variables/parameters**: Reported as errors
- **No unchecked side effect imports**: Enforced

### Vue Component Conventions

- **Composition API**: Uses `<script setup lang="ts">` exclusively
- **Component structure**: Script → Template → Style order enforced by ESLint
- **Multi-word component names**: Disabled (single-word components allowed)
- **Props**: Use proper TypeScript typing, no runtime prop validation needed
- **Emits**: Use TypeScript `defineEmits<...>()` for type safety

### File Naming

- **Components**: PascalCase (e.g., `WeatherGrid.vue`, `LocationManager.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useLocations.ts`)
- **Stores**: camelCase with `Store` suffix (e.g., `weatherStore.ts`)
- **Types**: camelCase with descriptive names (e.g., `weather.ts`, `dateUtils.ts`)
- **Services**: camelCase with descriptive suffix (e.g., `bmkgApi.ts`)

### State Management

- **Pinia stores**: Use composition API style (`defineStore(() => { ... })`)
- **Reactive data**: Use `ref()` and `computed()` from Vue
- **Error handling**: Store errors in reactive Maps, use try/catch for async operations

### CSS/Styling

- **Tailwind CSS**: Primary styling framework
- **PrimeVue**: Component library with custom themes
- **CSS classes**: kebab-case, utility-first approach
- **Responsive design**: Mobile-first with Tailwind breakpoints

### API Integration

- **Fetch API**: Native fetch with proper error handling
- **Async/await**: Preferred over Promise chains
- **Error messages**: Descriptive with context, logged to console
- **Caching**: localStorage for offline data persistence

### Error Handling Patterns

```typescript
// Standard async error handling
try {
  const result = await apiCall()
  // Handle success
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error'
  console.error('Operation failed:', error)
  // Store error state for UI feedback
}
```

### Component Communication

- **Props down, events up**: Standard Vue pattern
- **Provide/Inject**: For deep component trees
- **Pinia stores**: For cross-component state sharing
- **Composables**: For reusable logic and state

### Development Workflow

1. Run `npm run dev` for development
2. Use `npm run lint` before committing
3. Run `npm run type-check` to catch TypeScript errors
4. Build with `npm run build` to verify production readiness

### Performance Considerations

- **Computed properties**: Use for derived data
- **v-memo**: For expensive template computations
- **Lazy loading**: Components and routes when applicable
- **Bundle analysis**: Check build size regularly

### Security Notes

- **API keys**: Currently embedded in service files (should be environment variables)
- **XSS protection**: Vue's built-in template escaping
- **CORS**: Handled by BMKG API, no local proxy needed
