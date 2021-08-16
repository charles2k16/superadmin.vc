<template>
  <div class="container">
    <c-heading marginBottom="20px">Business</c-heading>

    <c-stat marginBottom="20px">
      <c-stat-label>Total Registered Businesses</c-stat-label>
      <c-stat-number>380,610</c-stat-number>
      <c-stat-helper-text>
        <c-stat-arrow type="increase" />
        30.60%
      </c-stat-helper-text>
    </c-stat>

    <div>
        
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
            <c-grid template-columns="repeat(6, 1fr)">
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Company name
                    </c-text>
                    <c-text fontSize="13px">
                        B&D
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Stage
                    </c-text>
                    <c-text fontSize="13px">
                        Ideation stage
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Objective
                    </c-text>
                    <c-text fontSize="13px">
                        Conceptualise my business idea
                    </c-text>
                </c-box>
                  <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Location
                    </c-text>
                    <c-text fontSize="13px">
                        Petran, Albania
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Investment Ready
                    </c-text>
                    <c-text fontSize="13px">
                        4 Months
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Size
                    </c-text>
                    <c-text fontSize="13px">
                        3-6
                    </c-text>
                </c-box>
               
            </c-grid>
            <c-divider>
            </c-divider>
            <c-grid template-columns="repeat(6, 1fr)">
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Company name
                    </c-text>
                    <c-text fontSize="13px">
                        B&D
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Stage
                    </c-text>
                    <c-text fontSize="13px">
                        Ideation stage
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Objective
                    </c-text>
                    <c-text fontSize="13px">
                        Conceptualise my business idea
                    </c-text>
                </c-box>
                  <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Location
                    </c-text>
                    <c-text fontSize="13px">
                        Petran, Albania
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Investment Ready
                    </c-text>
                    <c-text fontSize="13px">
                        4 Months
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Size
                    </c-text>
                    <c-text fontSize="13px">
                        3-6
                    </c-text>
                </c-box>
               
            </c-grid>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">
import { CStack } from '@chakra-ui/vue'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
      return {
      data,
      columns,
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
