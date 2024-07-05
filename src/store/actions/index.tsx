import crudredux from './crud'

export * from './crud'

const { middleware, reducer } = crudredux || {}

const finalDef = {
    middleware,
    reducer: {
        ...reducer
    },
}

export default finalDef