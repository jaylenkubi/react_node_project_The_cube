/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  Category,
  CategoryEntity,
  GetByQueryCategoryParams
} from './models'
import { customInstance } from './custom-instance-ui';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Get all categories
 */
export const getAllCategory = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<CategoryEntity[]>(
      {url: `/v1/entities/category`, method: 'GET', signal
    },
      options);
    }
  

export const getGetAllCategoryQueryKey = () => {
    return [`/v1/entities/category`] as const;
    }

    
export const getGetAllCategoryQueryOptions = <TData = Awaited<ReturnType<typeof getAllCategory>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAllCategoryQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllCategory>>> = ({ signal }) => getAllCategory(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAllCategory>>, TError, TData> & { queryKey: QueryKey }
}

export type GetAllCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getAllCategory>>>
export type GetAllCategoryQueryError = unknown

/**
 * @summary Get all categories
 */
export const useGetAllCategory = <TData = Awaited<ReturnType<typeof getAllCategory>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetAllCategoryQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Create a category
 */
export const createOneCategory = (
    category: Category,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<CategoryEntity>(
      {url: `/v1/entities/category`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: category
    },
      options);
    }
  


export const getCreateOneCategoryMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createOneCategory>>, TError,{data: Category}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createOneCategory>>, TError,{data: Category}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createOneCategory>>, {data: Category}> = (props) => {
          const {data} = props ?? {};

          return  createOneCategory(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreateOneCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createOneCategory>>>
    export type CreateOneCategoryMutationBody = Category
    export type CreateOneCategoryMutationError = unknown

    /**
 * @summary Create a category
 */
export const useCreateOneCategory = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createOneCategory>>, TError,{data: Category}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getCreateOneCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Get categories by query
 */
export const getByQueryCategory = (
    params?: GetByQueryCategoryParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<CategoryEntity[]>(
      {url: `/v1/entities/category/query`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetByQueryCategoryQueryKey = (params?: GetByQueryCategoryParams,) => {
    return [`/v1/entities/category/query`, ...(params ? [params]: [])] as const;
    }

    
export const getGetByQueryCategoryQueryOptions = <TData = Awaited<ReturnType<typeof getByQueryCategory>>, TError = unknown>(params?: GetByQueryCategoryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getByQueryCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetByQueryCategoryQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getByQueryCategory>>> = ({ signal }) => getByQueryCategory(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getByQueryCategory>>, TError, TData> & { queryKey: QueryKey }
}

export type GetByQueryCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getByQueryCategory>>>
export type GetByQueryCategoryQueryError = unknown

/**
 * @summary Get categories by query
 */
export const useGetByQueryCategory = <TData = Awaited<ReturnType<typeof getByQueryCategory>>, TError = unknown>(
 params?: GetByQueryCategoryParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getByQueryCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetByQueryCategoryQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get category by id
 */
export const getOneCategory = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<CategoryEntity>(
      {url: `/v1/entities/category/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetOneCategoryQueryKey = (id: number,) => {
    return [`/v1/entities/category/${id}`] as const;
    }

    
export const getGetOneCategoryQueryOptions = <TData = Awaited<ReturnType<typeof getOneCategory>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetOneCategoryQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getOneCategory>>> = ({ signal }) => getOneCategory(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getOneCategory>>, TError, TData> & { queryKey: QueryKey }
}

export type GetOneCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getOneCategory>>>
export type GetOneCategoryQueryError = unknown

/**
 * @summary Get category by id
 */
export const useGetOneCategory = <TData = Awaited<ReturnType<typeof getOneCategory>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneCategory>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetOneCategoryQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Update a category
 */
export const updateOneCategory = (
    id: unknown,
    categoryEntity: CategoryEntity,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<unknown>(
      {url: `/v1/entities/category/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: categoryEntity
    },
      options);
    }
  


export const getUpdateOneCategoryMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateOneCategory>>, TError,{id: unknown;data: CategoryEntity}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof updateOneCategory>>, TError,{id: unknown;data: CategoryEntity}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateOneCategory>>, {id: unknown;data: CategoryEntity}> = (props) => {
          const {id,data} = props ?? {};

          return  updateOneCategory(id,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type UpdateOneCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof updateOneCategory>>>
    export type UpdateOneCategoryMutationBody = CategoryEntity
    export type UpdateOneCategoryMutationError = unknown

    /**
 * @summary Update a category
 */
export const useUpdateOneCategory = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateOneCategory>>, TError,{id: unknown;data: CategoryEntity}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getUpdateOneCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Remove a category
 */
export const removeOneCategory = (
    id: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<unknown>(
      {url: `/v1/entities/category/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getRemoveOneCategoryMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeOneCategory>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof removeOneCategory>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeOneCategory>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  removeOneCategory(id,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type RemoveOneCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof removeOneCategory>>>
    
    export type RemoveOneCategoryMutationError = unknown

    /**
 * @summary Remove a category
 */
export const useRemoveOneCategory = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof removeOneCategory>>, TError,{id: number}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getRemoveOneCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    