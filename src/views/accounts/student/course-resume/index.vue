<template>
	<StudentLayout>
		<b-col xl="9">
			<b-card no-body class="border">
				<b-card-header class="border-bottom">
					<b-card no-body>
						<b-row class="g-0">
							<b-col md="3">
								<img :src="courses01" class="rounded-2" alt="card img">
							</b-col>
							<b-col md="9">
								<b-card-body>
									<b-card-title tag="h3">
										<a href="#">
											Полный курс цифрового маркетинга - 12 курсов за 1 час.
										</a>
									</b-card-title>

									<ul class="list-inline mb-2">
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faClock" class="text-danger me-1" />
											6ч 56м
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faTable" class="text-orange me-1" />
											82 лекций
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light">
											<font-awesome-icon :icon="faSignal" class="text-success me-1" />
											Начинающий
										</li>
									</ul>

									<a href="#" class="btn btn-primary-soft btn-sm mb-0">Возобновить курс</a>
								</b-card-body>
							</b-col>
						</b-row>
					</b-card>
				</b-card-header>
				<b-card-body>
					<h5>Учебная программа курса</h5>
					<b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6" body-class="mt-3"
							header-class="font-base" class="mb-3" visible>
							<template #title>
								<span class="mb-0">Внедрение цифрового маркетинга</span>
								<span class="small d-block mt-1">(3 лекции)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">1/2 завершено</p>
										<h6 class="mb-1 text-end">80%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="80" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span
												class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-200px">Вступление</span>
										</div>
										<p class="mb-0 text-truncate">2м 10с</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" data-bs-toggle="collapse" href="#addnote-1" role="button"
										aria-expanded="false" aria-controls="addnote-1" v-b-toggle="'addnote-1'">
										<BIconPencilSquare class="fa-fw me-1" />
										Примечание
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Включить еще раз</a>

									<b-collapse id="addnote-1">
										<b-card no-body class="card-body p-0 mt-2">

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Опишите SEO
														Двигатель</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Знать обо всех 
														аспектах маркетинга
													</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is
												Цифровой маркетинг. Что такое цифровой маркетинг</span>
										</div>
										<p class="mb-0 text-truncate">15м 10с</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" data-bs-toggle="collapse" href="#addnote-2" role="button"
										aria-expanded="false" aria-controls="addnote-2" v-b-toggle="'addnote-2'">
										<BIconPencilSquare class="fa-fw me-1" />
										Примечание
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Включить еще раз</a>
									<b-collapse id="addnote-2">
										<b-card no-body class="card-body p-0 mt-2">
											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Опишите SEO-движок</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Знать обо всех 
														аспектах маркетинга
													</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>
										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
											<font-awesome-icon :icon="faPlay" class="me-0" />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Типы
											Цифрового маркетинга</span>
									</div>
									<p class="mb-0 text-truncate">18м 10с</p>
								</div>
							</div>
						</b-accordion-item>
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6" body-class="mt-3"
							header-class="font-base" class="mb-3">
							<template #title>
								<span class="mb-0">Жизненный цикл клиента</span>
								<span class="small d-block mt-1">(3 лекции)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">0/3 завершено</p>
										<h6 class="mb-1 text-end">0%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="0" />
									</b-progress>
								</div>
								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-sm-400px">Introduction</span>
										</div>
										<p class="mb-0 text-truncate">2м 10с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
												Цифровой маркетинг. Что такое цифровой маркетинг</span>
										</div>
										<p class="mb-0 text-truncate">15м 10с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
											@click="showModal = !showModal">
											<BIconLockFill />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Типы Цифрового Маркетинга</span>
									</div>
									<p class="mb-0 text-truncate">18м 10с</p>
								</div>
							</div>
						</b-accordion-item>
					</b-accordion>
				</b-card-body>
			</b-card>
			<b-card no-body class="border mt-4">
				<b-card-header class="border-bottom">
					<b-card no-body>
						<b-row class="g-0">
							<b-col md="3">
								<img :src="courses08" class="rounded-2" alt="card img">
							</b-col>
							<b-col md="9">
								<b-card-body>
									<b-card-title tag="h3"><a href="#">Эскиз от А до Я: для дизайнера приложений</a></b-card-title>
									<ul class="list-inline mb-2">
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faClock" class="text-danger me-1" />
											8ч 56м
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
											<font-awesome-icon :icon="faTable" class="text-orange me-1" />
											65 лекций
										</li>{{ ' ' }}
										<li class="list-inline-item h6 fw-light">
											<font-awesome-icon :icon="faSignal" class="text-success me-1" />
											Любой уровень
										</li>
									</ul>
									<a href="#" class="btn btn-primary-soft btn-sm mb-0">Возобновить курс</a>
								</b-card-body>
							</b-col>
						</b-row>
					</b-card>
				</b-card-header>
				<b-card-body>
					<h5>Учебная программа курса</h5>
					<b-accordion class="accordion-icon accordion-bg-light" id="accordionExample4">
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6"
							header-class="font-base" body-class="mt-3" class="mb-3">
							<template #title>
								<span class="mb-0">Введение в Sketch</span>
								<span class="small d-block mt-1">(3 лекиии)</span>
							</template>
							<div class="vstack gap-3">

								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">1/3 завершено</p>
										<h6 class="mb-1 text-end">35%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="35" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span
												class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Вступление</span>
										</div>
										<p class="mb-0 text-truncate">2м 10с</p>
									</div>

									<a class="btn btn-xs btn-warning mb-0 me-1" href="#addnote-3" role="button" v-b-toggle="'addnote-3'">
										<BIconPencilSquare class="fa-fw me-1" />
										Примечание
									</a>
									<a href="#" class="btn btn-xs btn-dark mb-0">Включить еще раз</a>

									<b-collapse id="addnote-3">
										<b-card no-body class="card-body p-0 mt-2">

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">5:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Опишите SEO-движок</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

											<div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
												<div class="d-flex align-items-center">
													<span class="badge bg-dark me-2">10:20</span>
													<h6 class="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Знать обо всех аспектах маркетинга</h6>
												</div>
												<div class="d-flex">
													<a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
														<BIconPlayFill class="fa-fw" />
													</a>
													<a href="#" class="btn btn-sm btn-light btn-round mb-0">
														<BIconTrashFill class="fa-fw" />
													</a>
												</div>
											</div>

										</b-card>
									</b-collapse>
									<hr class="mb-0">
								</div>
								<div>
									<div class="d-flex justify-content-between align-items-center mb-2">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> Что такое цифровой маркетинг?</span>
										</div>
										<p class="mb-0 text-truncate">15м 10с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
											<font-awesome-icon :icon="faPlay" class="me-0" />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Типы цифрового маркетинга</span>
									</div>
									<p class="mb-0 text-truncate">18м 10с</p>
								</div>
							</div>
						</b-accordion-item>
						<b-accordion-item button-class="fw-bold rounded collapsed d-block pe-4" header-tag="h6"
							header-class="font-base" body-class="mt-3" class="mb-3">
							<template #title>
								<span class="mb-0">Маркетинг на YouTube</span>
								<span class="small d-block mt-1">(5 лекций)</span>
							</template>
							<div class="vstack gap-3">
								<div class="overflow-hidden">
									<div class="d-flex justify-content-between">
										<p class="mb-1 h6">0/5 завершено</p>
										<h6 class="mb-1 text-end">0%</h6>
									</div>
									<b-progress class="progress-sm bg-primary bg-opacity-10">
										<b-progress-bar class="bg-primary aos" :value="0" />
									</b-progress>
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Видеопоток</span>
										</div>
										<p class="mb-0 text-truncate">25м 5с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Инструмент для веб-мастеров</span>
										</div>
										<p class="mb-0 text-truncate">15м 20с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
												<font-awesome-icon :icon="faPlay" class="me-0" />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Избранный контент на канале</span>
										</div>
										<p class="mb-0 text-truncate">32м 20с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="position-relative d-flex align-items-center">
											<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
												@click="showModal = !showModal">
												<BIconLockFill />
											</a>
											<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Управление комментариями</span>
										</div>
										<p class="mb-0 text-truncate">20м 20с</p>
									</div>
									<hr class="mb-0">
								</div>

								<div class="d-flex justify-content-between align-items-center">
									<div class="position-relative d-flex align-items-center">
										<a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
											@click="showModal = !showModal">
											<BIconLockFill />
										</a>
										<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Аналитика каналов
										</span>
									</div>
									<p class="mb-0 text-truncate">18м 20с</p>
								</div>
							</div>
						</b-accordion-item>
					</b-accordion>
				</b-card-body>
			</b-card>
		</b-col>
	</StudentLayout>

	<b-modal v-model="showModal" size="lg" body-class="p-0" header-class="border-0" hide-footer centered>
		<div class="px-5 pb-5 position-relative overflow-hidden">
			<figure class="position-absolute bottom-0 end-0 mb-n4 me-n4 d-none d-sm-block">
				<img :src="element01" alt="element">
			</figure>
			<figure class="position-absolute top-0 end-0 z-index-n1 opacity-2">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="818.6px"
					height="235.1px" viewBox="0 0 818.6 235.1">
					<path class="fill-info"
						d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z">
					</path>
				</svg>
			</figure>
			<h2>Получите премиальный курс за <span class="text-success">{{currency}}800</span></h2>
			<p>Открой все возможности — оформите премиум и учитесь без ограничений!.</p>
			<b-row class="mb-3 item-collapse">
				<b-col sm="6">
					<ul class="list-group list-group-borderless">
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Высококачественная учебная программа
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Помощь в обучении
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Дипломный курс
						</li>
					</ul>
				</b-col>
				<b-col sm="6">
					<ul class="list-group list-group-borderless">
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Промежуточные курсы
						</li>
						<li class="list-group-item text-body">
							<BIconPatchCheckFill class="text-success" />Более 200 онлайн-курсов
						</li>
					</ul>
				</b-col>
			</b-row>
			<a href="#" class="btn btn-lg btn-orange-soft">Покупка премиум-класса</a>
		</div>
		<div class="modal-footer d-block bg-info">
			<div class="d-sm-flex justify-content-sm-between align-items-center text-center text-sm-start">
				<ul class="list-inline mb-0 social-media-btn mb-2 mb-sm-0">
					<li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
						<a :class="`btn btn-sm mb-0 me-1 bg-white ${link.class}`" href="#">
							<font-awesome-icon :icon="link.icon" class="fa-fw" />
						</a>
					</li>
				</ul>
				<div>
					<p class="mb-1 small">
						<a href="#" class="text-white">
							<font-awesome-icon :icon="faEnvelope" class="fa-fw me-2" />
							example@gmail.com
						</a>
					</p>
					<p class="mb-0 small"><a href="#" class="text-white">
							<font-awesome-icon :icon="faHeadset" class="fa-fw me-2" />
							+7 777 777 7777
						</a>
					</p>
				</div>
			</div>
		</div>
	</b-modal>

</template>
<script setup lang="ts">
import { ref } from 'vue';

import StudentLayout from '@/layouts/StudentLayout.vue';
import { faPlay, faTable, faSignal, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconPencilSquare, BIconPlayFill, BIconTrashFill, BIconLockFill, BIconPatchCheckFill } from 'bootstrap-icons-vue';
import { currency } from '@/helpers/constants';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses08 from '@/assets/images/courses/4by3/08.jpg';
import element01 from '@/assets/images/element/01.svg';

const showModal = ref(false);

const socialLink = [
	{ icon: faFacebookF, class: 'text-facebook' },
	{ icon: faInstagram, class: 'text-instagram' },
	{ icon: faTwitter, class: 'text-twitter' },
	{ icon: faLinkedinIn, class: 'text-linkedin' },
];
</script>