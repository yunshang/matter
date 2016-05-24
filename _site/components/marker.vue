<template>
    <div class="center-block col-sm-12 text-center">
        <header class="header">
            <h1>matter</h1>
            <input class="new-matter felx-1" autofocus="" autocomplete="off" placeholder="What can i do for you ?" v-model="new_matter" @keyup.enter="addmatter">
        </header>
        <div class="row" style="margin-top:20px">
            <div class="col-xs-6 col-sm-6" v-for="matter in matters">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{ matter.title }}</h3>
                    </div>
                    <textarea class="form-control" rows="3" v-model="matter.answer" @focus="editmatter(matter)" @keyup.enter="doneEdit(matter)" @keyup.esc="cancelEdit(matter)" @blur="doneEdit(matter)">{{ matter.answer }}</textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {storage} from "./cache";
  var ms = new storage();
  export default {
    data() {
      return {
        matters: ms.fetchall(),
        new_matter: '',
        edit_matter: null
      }
    },
    methods: {
      addmatter: function(){
        var value = this.new_matter && this.new_matter.trim();
        if (!value) {
          return;
        }
        var new_matter = ms.set_title(value);
        console.dir(new_matter);
        this.matters.push({ title: new_matter.get('title'), answer: new_matter.get('answer'), id: new_matter.id })
        this.new_matter = '';
      },
      editmatter: function (matter) {
        this.beforeEditCache = matter.answer;
        this.edit_matter = matter;
      },
      doneEdit: function (matter) {
        if (!this.edit_matter) {
          return;
        }
        this.edit_matter = null;
        matter.answer = matter.answer.trim();
        ms.update_answer(matter);
        if (!matter.answer) {
          this.removeTodo(matter.answer);
        }
      },
      cancelEdit: function (matter) {
        this.edit_matter = null;
        matter.answer  = this.beforeEditCache;
      },
      removeTodo: function (matter) {
        this.matters.$remove(matter);
      },
    },
  }

    </script>

    <style lang="sass" scoped>
        header {
            display: block;
        }
        h1 {
            position: absolute;
            width: 100%;
            font-size: 100px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
            -webkit-text-rendering: optimizeLegibility;
            -moz-text-rendering: optimizeLegibility;
            text-rendering: optimizeLegibility;
        }
        .new-matter,
        .edit {
            position: relative;
            margin: 0;
            font-size: 24px;
            font-family: inherit;
            font-weight: inherit;
            line-height: 1.4em;
            border: 0;
            outline: none;
            color: inherit;
            padding: 6px;
            border: 1px solid #999;
            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .new-matter {
            margin-top: 130px;
            padding: 16px 16px 16px 40px;
            border: none;
            background: rgba(0, 0, 0, 0.003);
            box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
        }
        input[type=range] {
            -webkit-appearance: slider-vertical;
            height: 300px;
        }
        .marker-btn {
            margin: 20px;
        }
        .center-block {
            float: none;
        }
        .thumbnail {
          white-space: nowrap;
        }
        li {
            white-space: nowrap;
            line-height: 35px;
            input {
                margin-right: 10px;
            }
            .remove-btn {
                margin-left: 10px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    </style>
