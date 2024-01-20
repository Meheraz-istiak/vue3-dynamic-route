<template>
    <VRow>
      <VCol

        cols="12"
        md="6"
      >
        <VCard title="Common">
          <VCardText>No ability is required to view this card</VCardText>
          <VCardText>
            This card is visible to both 'content'
          </VCardText>
        </VCard>
      </VCol>

    </VRow>
  </template>

  <route lang="yaml">
  meta:
    action: read
    subject: AclDemo
  </route>
