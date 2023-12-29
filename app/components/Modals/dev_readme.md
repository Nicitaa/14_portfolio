# How to reuse/implement are you sure modals

## Step 1 (in this folder)

```tsx
export function AreYouSureDeleteProductModal() {
  const { isOpen, closeModal } = useModalsStore()

  return (
    <AreYouSureModalContainer
      className="relative w-full max-w-[450px]"
      isOpen={isOpen["19MoreInfo"]}
      onClose={() => closeModal<TModals>("19MoreInfo")}>
      <div>any content for modal based on state here</div>
    </AreYouSureModalContainer>
  )
}
```

## Step 2

Export `AreSureModal.tsx` in `index.ts`

## Step 3 (in /app/interfaces/TAreYouSureModals.ts)

add name of your modal to this type to get TypeScript autocomplete (intellisense)

## Step 4 (in /app/providers)

Render your modal here

```tsx
<AreYouSureDeleteProductModal />
```

## Step 5 open your modal somehow

```tsx
const { openModal } = useAreYouSureModalsStore()
return <Button onClick={() => openModal("20MoreInfo")}>More info</Button>
```
