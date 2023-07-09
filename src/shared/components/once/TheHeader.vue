<template>
  <header class="header">
    <div class="logo-wrapper">
      <img src="@/assets/logo.webp" draggable="false" alt="logo" class="logo" />
    </div>
    <nav class="navbar">
      <ul class="navbar-list">
        <li
          v-for="route in headerRoutes"
          :key="route.name"
          class="navbar-list__item"
        >
          <router-link
            :to="route.path"
            class="navbar-list__link"
            active-class="navbar-list__link_active"
          >
            {{ route.meta.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="spacer"></div>
  </header>
</template>

<script setup>
  import headerRoutes from '@/router/header.routes'
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey);
    .logo-wrapper {
      width: 175px;
      padding: 24px 0;
      margin-left: 120px;
      .logo {
        width: 93px;
        height: 29px;
      }
    }
    .spacer {
      width: 175px;
      margin-right: 120px;
    }

    .navbar {
      user-select: none;
      margin: 0 auto;
      &-list {
        display: flex;
        padding-left: 0;
        gap: 16px;
        list-style: none;

        &__item {
          color: var(--color-grey);
          font-size: 14px;
          line-height: 24px;
        }
        &__link {
          text-decoration: none;
          color: inherit;

          &_active {
            transition: 0.3s;
            color: var(--color-black);
            font-weight: 500;
          }
        }
      }
    }
  }

  @media (max-width: $break-point) {
    .header {
      .logo-wrapper {
        margin-left: 10px;
        .logo {
          width: 93px;
          height: 29px;
        }
      }
      .spacer {
        width: 100px;
        margin-right: 10px;
      }
    }
  }
</style>
