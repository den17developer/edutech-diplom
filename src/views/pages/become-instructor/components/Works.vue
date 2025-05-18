<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col sm="10" xl="6" class="text-center mx-auto">
          <h2>С нашей помощью вы можете стать своей путеводной звездой</h2>
          <p class="mb-0">Раскрыть свой потенциал, делиться опытом и вдохновлять других. 
            Мы даём всё необходимое, чтобы вы уверенно начали путь преподавателя: от идей до готовых курсов. 
            Здесь вы не просто обучаете — вы становитесь источником света и роста для тех, кто ищет знания. 
            Ваш путь начинается с первого шага, и мы рядом на каждом этапе. Позвольте себе сиять — начните уже сегодня.</p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-md-5">
        <b-col class="text-center">
          <img :src="createaccount" class="h-200px" alt="">
          <h4 class="mt-3">Создай аккаунт</h4>
          <p class="text-truncate-2 mb-0">Создайте аккаунт и начните делиться своими знаниями с миром! 
            Присоединяйтесь к нашей платформе, чтобы легко создавать и управлять курсами.</p>
        </b-col>

        <b-col class="text-center">
          <img :src="addcourse" class="h-200px" alt="">
          <h4 class="mt-3">Добавь свой курс</h4>
          <p class="text-truncate-2 mb-0">PДобавьте свой курс и начните делиться знаниями с учениками по всему миру! 
            Создайте уникальный образовательный опыт и помогите другим расти.
          </p>
        </b-col>

        <b-col class="text-center">
          <img :src="earnmoney" class="h-200px" alt="">
          <h4 class="mt-3">Начни зарабатывать деньги</h4>
          <p class="text-truncate-2 mb-0">Начни зарабатывать деньги, обучая других! 
            Делитесь своими знаниями и опытом, создавая востребованные курсы, и получайте доход за каждый урок.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import createaccount from '@/assets/images/element/create-account.svg'
import addcourse from '@/assets/images/element/add-course.svg'
import earnmoney from '@/assets/images/element/earn-money.svg'
</script>