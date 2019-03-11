<template>
  <div class="container">
    <div class="filter-sort-bar">
      <a @click="handleShowSortCondition()">
        <span>综合排序</span>
        <svg fill="rgb(51, 51, 51)" class="icon-arrow-bottom">
          <use xlink:href="#icon-arrow-bottom"></use>
        </svg>
      </a>
      <a>距离最近</a>
      <a>品质联盟</a>
      <a @click="handleShowFilter()">
        <span>筛选</span>
        <svg fill="#666" class="icon-more-filter">
          <use xlink:href="#icon-more-filter"></use>
        </svg>
      </a>
    </div>
    <div class="modal" v-if="isShowSortCondition || isShowFilter" @click="handleModalHidden()" @touchmove.prevent
         @scroll.prevent>
      <ul v-if="isShowSortCondition" class="sort-list">
        <li
            class="sort-item"
            v-for="(sortItem, index) in sortFilterData.sortConditions"
            :key="index"
            @click="handleClickItem(index)"
            :style="{color: sortItem.isSelected ? '#f00': '#666'}"
        >{{sortItem.name}}
        </li>
      </ul>
      <div v-if="isShowFilter" class="filter">
        <dl>
          <dt>商家服务(可多选)</dt>
          <dd>
            <div class="item-wrapper">
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>优惠活动(单选)</dt>
          <dd>
            <div class="item-wrapper">
              <div class="item" v-for="(activity, index) in sortFilterData.activityTypes" :key="index">
                {{activity.name}}
              </div>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>人均消费</dt>
          <dd>
            <div class="item-wrapper">
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
            </div>
          </dd>
        </dl>
      </div>
      <div class="operation">
        <span class="clear">清空</span>
        <span class="ok">确定</span>
      </div>
    </div>
  </div>

</template>

<script>
  import * as userApi from '../api/userApi'

  export default {
    data() {
      return {
        sortFilterData: {
          activityTypes: [],
          supports: [],
          sortConditions: []
        },
        isShowSortCondition: false,
        isShowFilter: false
      }
    },
    methods: {
      async getSortFilters() {
        const data = await userApi.getSortFilters();
        this.sortFilterData = {
          activityTypes: data.bar.activity_types,
          supports: data.bar.supports,
          sortConditions: data.outside.inside_sort_filter
        };
        this.sortFilterData.sortConditions.forEach(item => {
          item.isSelected = false;
        })
      },
      handleShowSortCondition() {
        window.scrollTo(0, 1500);
        this.isShowSortCondition = !this.isShowSortCondition;
        this.isShowFilter = false;
      },
      handleShowFilter() {
        window.scrollTo(0, 1500);
        this.isShowFilter = !this.isShowFilter;
        this.isShowSortCondition = false;
      },
      handleModalHidden() {
        this.isShowSortCondition = false;
        this.isShowFilter = false;
      },
      handleClickItem(currentIndex) {
        this.sortFilterData.sortConditions.forEach((item, index) => {
          item.isSelected = (currentIndex === index);
        })
      }
    },
    mounted() {
      this.getSortFilters();
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;

    .filter-sort-bar {
      display: flex;
      height: 72px;
      align-items: center;
      border-bottom: 1px solid #fef;

      a {
        display: table-cell;
        width: 25%;
        font-size: 28px;

        span {
          vertical-align: middle;
        }

        .icon-arrow-bottom {
          width: 14px;
          height: 8px;
          margin-left: 6px;
          vertical-align: middle;
        }

        .icon-more-filter {
          width: 26px;
          height: 26px;
          margin-left: 6px;
          vertical-align: middle;
        }
      }
    }

    .modal {
      position: absolute;
      /*top: 178px;*/
      left: 0;
      z-index: 2;
      width: 750px;
      height: 1500px;
      background-color: rgba(0, 0, 0, .4);
    }

    .sort-list {
      width: 750px;
      background: #fff;
      position: absolute;
      padding-bottom: 24px;
      padding-top: 16px;
      z-index: 3;
      text-align: left;

      li {
        height: 80px;
        line-height: 80px;
        font-size: 28px;
        margin-left: 40px;
      }
    }

    .filter {
      width: 750px;
      background: #fff;
      position: absolute;
      padding: 16px 3% 24px 3%;
      box-sizing: border-box;
      z-index: 3;
      text-align: left;
      font-size: 24px;

      dt {
        margin-bottom: 10px;
        color: #666;
      }

      dd {
        margin-bottom: 10px;

        .item-wrapper {
          display: flex;
          flex-wrap: wrap;
          text-align: center;

          .item {
            flex: 0 0 31.33%;
            margin: 7px ;
            height: 70px;
            line-height: 70px;
            background-color: #fafafa;
          }
        }
      }
    }
    .operation {
      width: 100%;
      height: 88px;
      border-top: 1px solid #ccc;
      span {
        font-size: 32px;
      }
    }
  }
</style>
