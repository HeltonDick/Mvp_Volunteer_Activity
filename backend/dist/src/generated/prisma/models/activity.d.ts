import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type activityModel = runtime.Types.Result.DefaultSelection<Prisma.$activityPayload>;
export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null;
    _avg: ActivityAvgAggregateOutputType | null;
    _sum: ActivitySumAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
};
export type ActivityAvgAggregateOutputType = {
    id: number | null;
};
export type ActivitySumAggregateOutputType = {
    id: number | null;
};
export type ActivityMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActivityMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    date: Date | null;
    location: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActivityCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    date: number;
    location: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ActivityAvgAggregateInputType = {
    id?: true;
};
export type ActivitySumAggregateInputType = {
    id?: true;
};
export type ActivityMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActivityMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActivityCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    date?: true;
    location?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithRelationInput | Prisma.activityOrderByWithRelationInput[];
    cursor?: Prisma.activityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivityCountAggregateInputType;
    _avg?: ActivityAvgAggregateInputType;
    _sum?: ActivitySumAggregateInputType;
    _min?: ActivityMinAggregateInputType;
    _max?: ActivityMaxAggregateInputType;
};
export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivity[P]> : Prisma.GetScalarType<T[P], AggregateActivity[P]>;
};
export type activityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithAggregationInput | Prisma.activityOrderByWithAggregationInput[];
    by: Prisma.ActivityScalarFieldEnum[] | Prisma.ActivityScalarFieldEnum;
    having?: Prisma.activityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityCountAggregateInputType | true;
    _avg?: ActivityAvgAggregateInputType;
    _sum?: ActivitySumAggregateInputType;
    _min?: ActivityMinAggregateInputType;
    _max?: ActivityMaxAggregateInputType;
};
export type ActivityGroupByOutputType = {
    id: number;
    name: string;
    description: string;
    date: Date;
    location: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ActivityCountAggregateOutputType | null;
    _avg: ActivityAvgAggregateOutputType | null;
    _sum: ActivitySumAggregateOutputType | null;
    _min: ActivityMinAggregateOutputType | null;
    _max: ActivityMaxAggregateOutputType | null;
};
export type GetActivityGroupByPayload<T extends activityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityGroupByOutputType[P]>;
}>>;
export type activityWhereInput = {
    AND?: Prisma.activityWhereInput | Prisma.activityWhereInput[];
    OR?: Prisma.activityWhereInput[];
    NOT?: Prisma.activityWhereInput | Prisma.activityWhereInput[];
    id?: Prisma.IntFilter<"activity"> | number;
    name?: Prisma.StringFilter<"activity"> | string;
    description?: Prisma.StringFilter<"activity"> | string;
    date?: Prisma.DateTimeFilter<"activity"> | Date | string;
    location?: Prisma.StringFilter<"activity"> | string;
    createdAt?: Prisma.DateTimeFilter<"activity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"activity"> | Date | string;
};
export type activityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.activityOrderByRelevanceInput;
};
export type activityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.activityWhereInput | Prisma.activityWhereInput[];
    OR?: Prisma.activityWhereInput[];
    NOT?: Prisma.activityWhereInput | Prisma.activityWhereInput[];
    name?: Prisma.StringFilter<"activity"> | string;
    description?: Prisma.StringFilter<"activity"> | string;
    date?: Prisma.DateTimeFilter<"activity"> | Date | string;
    location?: Prisma.StringFilter<"activity"> | string;
    createdAt?: Prisma.DateTimeFilter<"activity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"activity"> | Date | string;
}, "id">;
export type activityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.activityCountOrderByAggregateInput;
    _avg?: Prisma.activityAvgOrderByAggregateInput;
    _max?: Prisma.activityMaxOrderByAggregateInput;
    _min?: Prisma.activityMinOrderByAggregateInput;
    _sum?: Prisma.activitySumOrderByAggregateInput;
};
export type activityScalarWhereWithAggregatesInput = {
    AND?: Prisma.activityScalarWhereWithAggregatesInput | Prisma.activityScalarWhereWithAggregatesInput[];
    OR?: Prisma.activityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.activityScalarWhereWithAggregatesInput | Prisma.activityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"activity"> | number;
    name?: Prisma.StringWithAggregatesFilter<"activity"> | string;
    description?: Prisma.StringWithAggregatesFilter<"activity"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"activity"> | Date | string;
    location?: Prisma.StringWithAggregatesFilter<"activity"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"activity"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"activity"> | Date | string;
};
export type activityCreateInput = {
    name: string;
    description: string;
    date: Date | string;
    location: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activityUncheckedCreateInput = {
    id?: number;
    name: string;
    description: string;
    date: Date | string;
    location: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activityUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activityCreateManyInput = {
    id?: number;
    name: string;
    description: string;
    date: Date | string;
    location: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activityUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activityOrderByRelevanceInput = {
    fields: Prisma.activityOrderByRelevanceFieldEnum | Prisma.activityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type activityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type activityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type activitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    date?: boolean;
    location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["activity"]>;
export type activitySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    date?: boolean;
    location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type activityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "date" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>;
export type $activityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "activity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string;
        date: Date;
        location: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["activity"]>;
    composites: {};
};
export type activityGetPayload<S extends boolean | null | undefined | activityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$activityPayload, S>;
export type activityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<activityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityCountAggregateInputType | true;
};
export interface activityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['activity'];
        meta: {
            name: 'activity';
        };
    };
    findUnique<T extends activityFindUniqueArgs>(args: Prisma.SelectSubset<T, activityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends activityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, activityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends activityFindFirstArgs>(args?: Prisma.SelectSubset<T, activityFindFirstArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends activityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, activityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends activityFindManyArgs>(args?: Prisma.SelectSubset<T, activityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends activityCreateArgs>(args: Prisma.SelectSubset<T, activityCreateArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends activityCreateManyArgs>(args?: Prisma.SelectSubset<T, activityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends activityDeleteArgs>(args: Prisma.SelectSubset<T, activityDeleteArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends activityUpdateArgs>(args: Prisma.SelectSubset<T, activityUpdateArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends activityDeleteManyArgs>(args?: Prisma.SelectSubset<T, activityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends activityUpdateManyArgs>(args: Prisma.SelectSubset<T, activityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends activityUpsertArgs>(args: Prisma.SelectSubset<T, activityUpsertArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends activityCountArgs>(args?: Prisma.Subset<T, activityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityCountAggregateOutputType> : number>;
    aggregate<T extends ActivityAggregateArgs>(args: Prisma.Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>;
    groupBy<T extends activityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: activityGroupByArgs['orderBy'];
    } : {
        orderBy?: activityGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: activityFieldRefs;
}
export interface Prisma__activityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface activityFieldRefs {
    readonly id: Prisma.FieldRef<"activity", 'Int'>;
    readonly name: Prisma.FieldRef<"activity", 'String'>;
    readonly description: Prisma.FieldRef<"activity", 'String'>;
    readonly date: Prisma.FieldRef<"activity", 'DateTime'>;
    readonly location: Prisma.FieldRef<"activity", 'String'>;
    readonly createdAt: Prisma.FieldRef<"activity", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"activity", 'DateTime'>;
}
export type activityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where: Prisma.activityWhereUniqueInput;
};
export type activityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where: Prisma.activityWhereUniqueInput;
};
export type activityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithRelationInput | Prisma.activityOrderByWithRelationInput[];
    cursor?: Prisma.activityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityScalarFieldEnum | Prisma.ActivityScalarFieldEnum[];
};
export type activityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithRelationInput | Prisma.activityOrderByWithRelationInput[];
    cursor?: Prisma.activityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityScalarFieldEnum | Prisma.ActivityScalarFieldEnum[];
};
export type activityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithRelationInput | Prisma.activityOrderByWithRelationInput[];
    cursor?: Prisma.activityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityScalarFieldEnum | Prisma.ActivityScalarFieldEnum[];
};
export type activityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activityCreateInput, Prisma.activityUncheckedCreateInput>;
};
export type activityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.activityCreateManyInput | Prisma.activityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type activityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activityUpdateInput, Prisma.activityUncheckedUpdateInput>;
    where: Prisma.activityWhereUniqueInput;
};
export type activityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.activityUpdateManyMutationInput, Prisma.activityUncheckedUpdateManyInput>;
    where?: Prisma.activityWhereInput;
    limit?: number;
};
export type activityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where: Prisma.activityWhereUniqueInput;
    create: Prisma.XOR<Prisma.activityCreateInput, Prisma.activityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.activityUpdateInput, Prisma.activityUncheckedUpdateInput>;
};
export type activityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    where: Prisma.activityWhereUniqueInput;
};
export type activityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activityWhereInput;
    limit?: number;
};
export type activityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
};
