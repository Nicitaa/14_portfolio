# What in this docs?

- TypeScript in API routes
- Error handling in API routes
- Usage for each route

  - Usage for insert/booking route
    <br/>
    <br/>
    <br/>

# TypeScript in API routes

### Server side (types)

`api/customer`

```ts
export type TAPICustomer = {
  session_id: string
}

export interface IResponse {
  customerEmail: string | null
}

export type TAPICustomerResponse = AxiosResponse<IResponse>

return NextResponse.json({ customerEmail: session.customer_details?.email })
```

### Client side (types)

```ts
const response: TAPICustomerResponse = await axios.post("/api/customer", {
  session_id: session_id,
} as TAPICustomer)
```

<br/>
<br/>
<br/>

# Errors handling in API routes

Please check best practice in `api/products/delete` route and throw errors like this in every API route

### Server side (errors handling)

```ts
console.log(23, "No productId", productId)
return new NextResponse(
  `Delete product error \n
                Path:/api/products/delete/route.ts \n
                Error message:\n please check that you passed productId`,
  { status: 400 },
)

//or

console.log(33, "Delete images from bucket error")
return new NextResponse(
  `Delete images from bucket \n
   Path:/api/products/delete/route.ts \n
   Error message:\n ${deleteFromBucketError.message}`,
  { status: 400 },
)

// for uncaught errors (in catch block) - use only that required
catch (error: any) {
    // Best practice to throw error like this
    if (error instanceof Stripe.errors.StripeError) {
      console.log(84, "DELETE_FOOD_ERROR\n (stripe) \n ", error.message)
      return new NextResponse(`/api/food/delete/route.ts error (stripe) \n ${error.message}`, {
        status: 500,
      })
    }
    if (error instanceof AxiosError) {
      console.log(84, "DELETE_FOOD_ERROR (supabase) \n", error)
      return new NextResponse(`/api/food/delete/route.ts error \n ${error}`, {
        status: 500,
      })
    }
    if (error instanceof Error) {
      console.log(90, "DELETE_FOOD_ERROR\n (supabase) \n", error.message)
      return new NextResponse(`/api/food/delete/route.ts error \n ${error}`, {
        status: 500,
      })
    }
  }
```

### Client side (errors handling)

```ts
try {
  await axios.post("/api/food/delete", { productId: id } as TAPIProductDelete)
} catch (error) {
  if (error instanceof AxiosError) {
    console.log(26, error.response?.data)
    toast.show("error", "Error deleting food", error.response?.data, 15000)
  }
}
```

<br/>
<br/>
<br/>

# Usage for each route

### Usage for insert/booking route

I use this route to inser booking in DB - so users see their bookings in BookedAppointments.tsx

1. Check for rate limit (1 time per day)
2. Danding around with booking date to avoid error
3. Inserting booking in DB
