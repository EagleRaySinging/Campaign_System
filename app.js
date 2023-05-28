// 製作html表格
const tbody = document.querySelector('.table__body')

for (let i = 0; i < 15; i++) {
  let repeatTr = `
<tr class="table__row" data-index=${i + 1}>
  <td class="table__cell table__cell--checkbox">
    <input type="checkbox" class="checked">
  </td >
  <td class="table__cell table__cell--id">1</td>
  <td class="table__cell table__cell--name">Christmas 2020</td>
  <td class="table__cell table__cell--advertiser">
   <span class="cell__advertiser__line">Food Market</span>
   <span class="cell__advertiser__line cell__advertiser__line--group">Krab</span>
  </td>
  <td class="table__cell table__cell--description">holiday night during christmas</td>
  <td class="table__cell table__cell--price">$2000</td>
  <td class="table__cell table__cell--starttime">2020/12/24 19:30</td>
  <td class="table__cell table__cell--endtime">2021/1/2 23:00</td>
  <td class="table__cell table__cell--action">
    <img class="cell__action__icon"
      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
      id="action__input_1" alt="menu" />
    <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_1"
      id="action__menu_1">
      <menu class="menu__body">
        <menuitem class="menu__item">
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
            class="menu__item__icon"/>
          <span>Duplicate</span>
        </menuitem>
        <menuitem class="menu__item">
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
            class="menu__item__icon"/>
          <span>Edit</span>
        </menuitem>
        <menuitem class="menu__item">
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
            class="menu__item__icon"/>
          <span>Delete</span>
        </menuitem>
      </menu>
    </div>
  </td>
</tr>
`
  tbody.innerHTML += repeatTr
}





// 製作Action部分，點擊會有下拉小選單
const input = document.querySelectorAll('td > .cell__action__icon')

input.forEach(eachInput => {
  eachInput.addEventListener('click', (e) => {
    const menu = document.getElementById('action__menu_1')
    menu.classList.toggle('hidden')
  })
})


// 製作點擊月亮，介面會出現夜間模式
const darkModeToggle = document.getElementById('dark__mode__toggle')

darkModeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

// 製作雙數列有不同底色效果
// const colorRows = document.querySelectorAll('tbody > .table__row')

// colorRows.forEach(e => {
//   id = Number(e.dataset.index)
//   if (id % 2 === 0) {
//     e.classList.add('color__row')
//   }
// })

// 製作checkbox被點擊後，整列改變底色
const checkedBox = document.querySelectorAll('.checked')

checkedBox.forEach(eachChecked => {
  eachChecked.addEventListener('change', (e) => {
    e.target.parentElement.parentElement.classList.toggle('selected_mode')
  })
})
