<template>
    <VRow>
      <VCol

        cols="12"
        md="6"
      >
        <VCard title="Common">
          <VCardText>No ability is required to view this card</VCardText>
          <VCardText>
            This card is visible to both 'setting'
          </VCardText>
        </VCard>
      </VCol>

      <VCard>
        <h2>hello</h2>
      </VCard>

    </VRow>

  </template>

  <route lang="yaml">
  meta:
    action: read
    subject: Demo
  </route>
