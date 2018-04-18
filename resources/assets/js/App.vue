<template>
    <div id="root">
        <div class="navbar navbar-expand-sm navbar-laravel bg-faded">
            <div class="navbar-brand">
                <router-link to="/">Brand Name</router-link>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Customer</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/invoice">Invoice</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

